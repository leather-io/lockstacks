import { Box, Flex } from '@stacks/ui';
import { IconLock, IconStairs } from '@tabler/icons-react';

import DivingBoardIllustration from '@assets/images/stack-in-a-pool.svg';
import { Users } from '@components/icons/users';

import {
  StackingOptionCard as Card,
  StackingOptionsCardDescription as Description,
  StackingOptionCardBenefit as OptionBenefit,
  StackingOptionCardBenefitContainer as OptionBenefitContainer,
  StackingOptionCardTitle as Title,
} from '../components/start-stacking-layout';
import { ChooseStackingMethodLayoutProps } from '../types';
import { PooledStackingButton } from './pooled-stacking-button';
import { PooledStackingInsufficientStackingBalanceWarning } from './pooled-stacking-insufficient-stacking-balance-warning';

export function PooledStackingCard(props: ChooseStackingMethodLayoutProps) {
  return (
    <Card>
      <Box height="130px">
        <DivingBoardIllustration />
      </Box>
      <Title>Stack in a pool</Title>
      <Description>
        Delegate to a Stacking pool provider, enabling you to stack even if you don&apos;t meet the
        minimum. The Stacking provider may maintain discretion with payment of rewards.
      </Description>

      <OptionBenefitContainer>
        <OptionBenefit icon={IconLock}>Interact with the protocol directly</OptionBenefit>
        <OptionBenefit icon={Users}>A pool stacks on your behalf</OptionBenefit>
        <OptionBenefit icon={IconStairs}>No minimum required</OptionBenefit>
      </OptionBenefitContainer>

      <Flex alignItems="center">
        <PooledStackingButton {...props} />
        <PooledStackingInsufficientStackingBalanceWarning {...props} />
      </Flex>
    </Card>
  );
}
