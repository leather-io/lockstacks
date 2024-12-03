import { Box, Stack } from 'leather-styles/jsx';
import { DirectStackingCard } from './components/direct-stacking-card';
import { LiquidStackingCard } from './components/liquid-stacking-card';
import { Messages } from './components/messages';
import { PooledStackingCard } from './components/pooled-stacking-card';
import {
  StartStackingLayout as Layout,
  StackingOptionsCardContainer as OptionsContainer,
} from './components/start-stacking-layout';
import { ChooseStackingMethodLayoutProps } from './types';
import { token } from 'leather-styles/tokens';

function Separator() {
  console.log(token('borders.subdued'));

  return (
    <Box
      display={['none', 'none', 'none', 'inherit']}
      border={`1px solid ${token('borders.subdued')}`}
    ></Box>
  );
}

export function ChooseStackingMethodLayout(props: ChooseStackingMethodLayoutProps) {
  return (
    <Layout>
      <Stack height="100%" justifyContent="center">
        {props.isSignedIn && (
          <Box pt="base">
            <Messages {...props} />
          </Box>
        )}
        <OptionsContainer>
          <PooledStackingCard {...props} />
          <Separator />
          <LiquidStackingCard {...props} />
          <Separator />
          <DirectStackingCard {...props} />
        </OptionsContainer>
      </Stack>
    </Layout>
  );
}
