import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Box, Flex, styled } from 'leather-styles/jsx';
import { useGlobalContext } from 'src/context/use-app-context';
import { useHover } from 'use-events';

import darkLogo from '../assets/images/logo-dark.svg';
import lightLogo from '../assets/images/logo.svg';
import { createSearch } from '@utils/networks';
import { truncateMiddle } from '@utils/tx-utils';

import { useAuth } from './auth-provider/auth-provider';
import { NetworkInfo } from './network-info';
import { OpenLinkInNewTab } from './open-link-in-new-tab';
import { token } from 'leather-styles/tokens';
import { Button } from '@leather.io/ui';

export function Navbar() {
  const { isSignedIn, signOut, signIn, address } = useAuth();
  const [isHovered, bind] = useHover();
  const { activeNetwork } = useGlobalContext();

  const Logo = useMemo(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDark ? darkLogo : lightLogo;
  }, []);

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      p="base-loose"
      style={{ borderBottom: `${token('borders.default')}` }}
    >
      <Flex alignItems="center">
        <Link to={`/${createSearch(activeNetwork)}`}>
          <Flex alignItems="center">
            <Logo />
          </Flex>
        </Link>
      </Flex>
      <Box>
        <Flex p="sm" justify="right" alignItems="center">
          <NetworkInfo />
          <OpenLinkInNewTab href="https://wallet.hiro.so/wallet/faq#stacking" px="loose">
            <styled.p textStyle="label.02" fontWeight={500}>
              FAQ
            </styled.p>
          </OpenLinkInNewTab>
          <Box pr="12px">
            {isSignedIn && address ? (
              <Button
                width="160px"
                boxShadow="none"
                variant="outline"
                _hover={{ boxShadow: 'none' }}
                onClick={() => signOut()}
                {...bind}
              >
                {isHovered ? 'Sign out' : truncateMiddle(address)}
              </Button>
            ) : (
              <Button boxShadow="none" _hover={{ boxShadow: 'none' }} onClick={() => signIn()}>
                Connect wallet
              </Button>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
