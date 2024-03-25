import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { ContractCallRegularOptions, showContractCall } from '@stacks/connect';
import { StackingClient, verifyPox4SignatureHash } from '@stacks/stacking';
import BigNumber from 'bignumber.js';
import * as yup from 'yup';

import { validateDecimalPrecision } from '@utils/form/validate-decimals';
import { stxToMicroStx, toHumanReadableStx } from '@utils/unit-convert';
import { createBtcAddressSchema } from '@utils/validators/btc-address-validator';
import { stxAmountSchema } from '@utils/validators/stx-amount-validator';
import { stxBalanceValidator } from '@utils/validators/stx-balance-validator';

import { DirectStackingFormValues } from './types';

interface CreateValidationSchemaArgs {
  /**
   * Available balance of the current account. Used to ensure users don't try to stack more than is available.
   */
  availableBalanceUStx: bigint;

  /**
   * The stacking transaction's estimated fee. Used to ensure the account has enough STX available to both stack the desired amount and pay for the stacking transaction fee.
   */
  transactionFeeUStx: bigint;

  /**
   * The minimum stacking amount, in ustx, required by the PoX contract.
   */
  minimumAmountUStx: bigint;

  /**
   * The name of the network the app is live on, e.g., mainnet or testnet.
   */
  network: string;
}
export function createValidationSchema({
  availableBalanceUStx,
  transactionFeeUStx,
  minimumAmountUStx,
  network,
}: CreateValidationSchemaArgs) {
  return yup.object().shape({
    amount: stxAmountSchema()
      .test(stxBalanceValidator(availableBalanceUStx))
      .test('test-precision', 'You cannot stack with a precision of less than 1 STX', value => {
        // If `undefined`, throws `required` error
        if (value === undefined) return true;
        return validateDecimalPrecision(0)(value);
      })
      .test({
        name: 'test-fee-margin',
        message: 'You must stack less than your entire balance to allow for the transaction fee',
        test: value => {
          if (value === null || value === undefined) return false;
          const uStxInput = stxToMicroStx(value);
          return !uStxInput.isGreaterThan(
            new BigNumber(availableBalanceUStx.toString()).minus(transactionFeeUStx.toString())
          );
        },
      })
      .test({
        name: 'test-min-utx',
        message: `You must stack with at least ${toHumanReadableStx(minimumAmountUStx)}`,
        test: value => {
          if (value === null || value === undefined) return false;
          const uStxInput = stxToMicroStx(value);
          return new BigNumber(minimumAmountUStx.toString()).isLessThanOrEqualTo(uStxInput);
        },
      }),
    lockPeriod: yup.number().defined(),
    poxAddress: createBtcAddressSchema({
      network,
    }),
  });
}

interface CreateHandleSubmitArgs {
  client: StackingClient;
  setIsContractCallExtensionPageOpen: Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
}
export function createHandleSubmit({
  client,
  setIsContractCallExtensionPageOpen,
  navigate,
}: CreateHandleSubmitArgs) {
  return async function handleSubmit(values: DirectStackingFormValues) {
    if (values.amount === null) throw new Error('Expected a non-null amount to be submitted.');

    // TODO: handle thrown errors
    const [stackingContract, coreInfo] = await Promise.all([
      client.getStackingContract(),
      client.getPoxInfo(),
    ]);
    const currentHeight = coreInfo.current_burnchain_block_height;
    if (typeof currentHeight !== 'number') {
      throw new Error('Unable to get current block height.');
    }
    const authId = parseInt(values.authId, 10);
    const maxAmount = stxToMicroStx(values.maxAmount).toString();
    if (typeof values.signerSignature === 'string') {
      const isValid = verifyPox4SignatureHash({
        topic: 'stack-stx',
        poxAddress: values.poxAddress,
        rewardCycle: coreInfo.current_cycle.id,
        authId,
        maxAmount,
        period: values.lockPeriod,
        network: client.network,
        publicKey: values.signerKey,
        signature: values.signerSignature,
      });
      if (!isValid) {
        console.warn('Unable to verify signature.');
      }
    }
    const stackOptions = client.getStackOptions({
      contract: stackingContract,
      amountMicroStx: stxToMicroStx(values.amount).toString(),
      cycles: values.lockPeriod,
      poxAddress: values.poxAddress,
      // TODO
      burnBlockHeight: currentHeight,
      signerKey: values.signerKey,
      signerSignature: values.signerSignature,
      maxAmount,
      authId,
    });

    showContractCall({
      // Type coercion necessary because the `network` property returned by
      // `client.getStackingContract()` has a wider type than allowed by `showContractCall`. Despite
      // the wider type, the actual value of `network` is always of the type `StacksNetwork`
      // expected by `showContractCall`.
      //
      // See
      // https://github.com/hirosystems/stacks.js/blob/0e1f9f19dfa45788236c9e481f9a476d9948d86d/packages/stacking/src/index.ts#L1054
      ...(stackOptions as ContractCallRegularOptions),
      onFinish() {
        setIsContractCallExtensionPageOpen(false);
        navigate('../direct-stacking-info');
      },
      onCancel() {
        setIsContractCallExtensionPageOpen(false);
      },
    });
    setIsContractCallExtensionPageOpen(true);
  };
}
