import { ReactNode, createContext, useContext } from 'react';

import { useAuth } from '@components/auth-provider/auth-provider';
import { useNetwork } from '@components/network-provider';
import { StackingClient } from '@stacks/stacking';
import {
  callReadOnlyFunction,
  noneCV,
  principalCV,
  someCV,
  validateStacksAddress as isValidStacksAddress,
} from '@stacks/transactions';
import { useQuery } from '@tanstack/react-query';
import { PoxContract } from 'src/pages/stacking/start-pooled-stacking/types-preset-pools';

interface StackingClientContext {
  client: null | StackingClient;
}
const StackingClientContext = createContext<StackingClientContext>({
  client: null,
});

interface Props {
  children: ReactNode;
}
export function StackingClientProvider({ children }: Props) {
  const { address } = useAuth();
  const { network } = useNetwork();

  let client: StackingClient | null = null;

  if (address !== null && isValidStacksAddress(address)) {
    client = new StackingClient(address, network);
  }

  return (
    <>
      <StackingClientContext.Provider value={{ client }}>{children}</StackingClientContext.Provider>
    </>
  );
}

export function useStackingClient() {
  return useContext(StackingClientContext);
}

export function useGetCycleDurationQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getCycleDuration', client], () => client.getCycleDuration());
}

export function useGetStatusQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getStatus', client], () => client.getStatus());
}

export function useGetPoxOperationInfo() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getPoxOperationInfo', client], () => client.getPoxOperationInfo());
}

export function useGetAccountBalance() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getAccountBalance', client], () => client.getAccountBalance());
}

export function useGetAccountBalanceLocked() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getAccountBalanceLocked', client], () => client.getAccountBalanceLocked());
}

export function useGetCoreInfoQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getCoreInfo', client], () => client.getCoreInfo());
}

export function useGetAccountExtendedBalancesQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getAccountExtendedBalances', client], () =>
    client.getAccountExtendedBalances()
  );
}

export function useGetSecondsUntilNextCycleQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getSecondsUntilNextCycle', client], () => client.getSecondsUntilNextCycle(), {
    refetchInterval: 60_000,
  });
}

export function useGetPoxInfoQuery() {
  const { client } = useStackingClient();
  if (!client) throw new Error('Expected client to be defined.');
  return useQuery(['getPoxInfo', client], () => client.getPoxInfo());
}

// Eventually, this can be a function on the Stacking Client
export function useGetAllowanceContractCallers(callingContract: string) {
  const { address: senderAddress } = useAuth();
  const { network } = useNetwork();

  // TODO use correct pox contract id
  const poxContractId = PoxContract.pox2;

  return useQuery(['getAllowanceContractCallers', senderAddress, callingContract, network], () => {
    if (senderAddress) {
      if (callingContract === PoxContract.poxDelegation) {
        return Promise.resolve(someCV(noneCV()));
      }
      const [contractAddress, contractName] = poxContractId.split('.');
      return callReadOnlyFunction({
        contractAddress,
        contractName,
        functionName: 'get-allowance-contract-callers',
        functionArgs: [principalCV(senderAddress), principalCV(callingContract)],
        senderAddress,
        network,
      });
    } else {
      return Promise.resolve(noneCV());
    }
  });
}
