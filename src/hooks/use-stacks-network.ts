import {
  networkFrom,
  STACKS_MOCKNET,
  STACKS_DEVNET,
  STACKS_MAINNET,
  STACKS_TESTNET,
  StacksNetworkName,
  StacksNetwork,
} from '@stacks/network';
import { NetworkInstance } from 'src/pages/stacking/start-pooled-stacking/types-preset-pools';
import { getNetworkInstance } from 'src/pages/stacking/start-pooled-stacking/utils-preset-pools';
import { whenStacksNetworkMode } from 'src/types/network';

import { useGlobalContext } from '../context/use-app-context';
import { fetchFn } from '@components/stacking-client-provider/fetch-fn';

export type StacksNetworkContext = ReturnType<typeof useStacksNetwork>;

function setFetchFn(network: StacksNetwork) {
  network.client.fetch = fetchFn;
  return network;
}

export const useStacksNetwork = (): {
  network: StacksNetwork;
  networkName: StacksNetworkName;
  networkInstance: NetworkInstance;
  networkLabel: string;
} => {
  const selectedNetwork = useGlobalContext().activeNetwork;

  const networkMode = selectedNetwork.mode;
  const network = whenStacksNetworkMode(networkMode)({
    mainnet: networkFrom(setFetchFn(STACKS_MAINNET)),
    testnet: networkFrom(setFetchFn(STACKS_TESTNET)),
    devnet: networkFrom(setFetchFn(STACKS_DEVNET)),
    mocknet: networkFrom(setFetchFn(STACKS_MOCKNET)),
  });

  const networkInstance = getNetworkInstance(network);
  return {
    network,
    networkName: networkMode as StacksNetworkName,
    networkInstance,
    networkLabel: selectedNetwork.label,
  };
};
