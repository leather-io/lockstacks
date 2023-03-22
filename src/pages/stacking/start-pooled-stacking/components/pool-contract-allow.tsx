import { Pool, PoolName } from '../types-preset-pools';
import { PoolContractAllowButton } from './pool-contract-allow-button';
import { poolByName } from './preset-pools';
import { Text, color, Spinner } from '@stacks/ui';
import { truncateMiddle } from '@utils/tx-utils';
import { useGetAllowanceContractCallers } from '@components/stacking-client-provider/stacking-client-provider';
import { ErrorAlert } from '@components/error-alert';
import { ClarityType } from '@stacks/transactions';

export function userHasAllowedContractCallerForPool(pool: Pool) {
  return pool.name === PoolName.PlanBetter;
}

export function PoolContractAllow({
  poolName,
  handleSubmit,
  isPoolActive,
}: {
  poolName: PoolName;
  handleSubmit(poolName: PoolName): void;
  isPoolActive: boolean;
}) {
  const pool = poolByName(poolName);
  const q = useGetAllowanceContractCallers(pool.poxContract);
  if (q.isLoading) {
    return isPoolActive ? <Spinner /> : <></>;
  }
  if (q.isError || !q.data) {
    const msg = 'Error retrieving contract caller allowance.';
    const id = 'bf90b490-5b68-4e1f-8a30-151aabd89e1b';
    console.error(id, msg, q);
    return isPoolActive ? <ErrorAlert id={id}>{msg}</ErrorAlert> : <></>;
  }
  if (q.data.type === ClarityType.OptionalSome) {
    return (
      <Text
        textStyle="body.small"
        color={color('text-caption')}
        mt="tight"
        display="inline-block"
        lineHeight="18px"
      >
        Uses pool contract {truncateMiddle(pool.poxContract)}: Allowed.
      </Text>
    );
  } else if (isPoolActive) {
    return <PoolContractAllowButton poolName={poolName} handleSubmit={handleSubmit} />;
  } else {
    return <></>;
  }
}
