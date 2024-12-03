import { Box, Flex } from 'leather-styles/jsx';
import { IconLock, IconStairs } from '@tabler/icons-react';

import MeltingIceIllustration from '@assets/images/liquid-stacking.svg';
import { Users } from '@components/icons/users';

import {
  StackingOptionCard as Card,
  StackingOptionsCardDescription as Description,
  StackingOptionCardBenefit as OptionBenefit,
  StackingOptionCardBenefitContainer as OptionBenefitContainer,
  StackingOptionCardTitle as Title,
} from '../components/start-stacking-layout';
import { ChooseStackingMethodLayoutProps } from '../types';
import { LiquidStackingButton } from './liquid-stacking-button';
import { PooledStackingInsufficientStackingBalanceWarning } from './pooled-stacking-insufficient-stacking-balance-warning';

export function LiquidStackingCard(props: ChooseStackingMethodLayoutProps) {
  return (
    <Card>
      <Box height="130px">
        <MeltingIceIllustration />
      </Box>
      <Title>Liquid Stacking</Title>
      <Description>
        Stack with a liquid stacking protocol, enabling you to retain your liquidity in stSTX tokens
        and auto-compound yield in STX. The provider may charge a small commission on rewards.
      </Description>

      <OptionBenefitContainer>
        <OptionBenefit icon={IconLock}>Interact with liquid stacking contracts</OptionBenefit>
        <OptionBenefit icon={Users}>A protocol stacks on your behalf</OptionBenefit>
        <OptionBenefit icon={IconStairs}>No minimum required</OptionBenefit>
      </OptionBenefitContainer>

      <Flex alignItems="center">
        <LiquidStackingButton {...props} />
        <PooledStackingInsufficientStackingBalanceWarning {...props} />
      </Flex>
    </Card>
  );
}
