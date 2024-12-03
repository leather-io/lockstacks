import { Box, Stack, styled } from 'leather-styles/jsx';
import { DirectStackingCard } from './components/direct-stacking-card';
import { LiquidStackingCard } from './components/liquid-stacking-card';
import { Messages } from './components/messages';
import BTCBall from '../../assets/images/btc-ball.svg';
import { PooledStackingCard } from './components/pooled-stacking-card';
import {
  StartStackingLayout,
  StackingOptionsCardContainer,
} from './components/start-stacking-layout';
import { ChooseStackingMethodLayoutProps } from './types';
import { token } from 'leather-styles/tokens';

export function ChooseStackingMethodLayout(props: ChooseStackingMethodLayoutProps) {
  return (
    <StartStackingLayout>
      <section style={{ position: 'relative' }}>
        <styled.h1
          fontFamily={'MarcheSuperPro'}
          textTransform="uppercase"
          mt="space.09"
          mx="space.00"
          style={{ lineHeight: '0.8' }}
          fontSize={'108px'}
          textStyle="heading.01"
        >
          Earn bitcoin yield with Leather
          <span style={{ position: 'absolute', top: '50px' }}>
            <BTCBall />
          </span>
        </styled.h1>
      </section>
      <styled.p my="space.04" textStyle="body.01" fontSize="26px">
        Earn Bitcoin yield by bridging BTC into sBTC or stacking your STX.
      </styled.p>
      <Stack
        backgroundColor={token('colors.ink.background-overlay')}
        height="100%"
        justifyContent="center"
      >
        {props.isSignedIn && (
          <Box pt="base">
            <Messages {...props} />
          </Box>
        )}
        <StackingOptionsCardContainer>
          <PooledStackingCard {...props} />
          <LiquidStackingCard {...props} />
          <DirectStackingCard {...props} />
        </StackingOptionsCardContainer>
      </Stack>
    </StartStackingLayout>
  );
}
