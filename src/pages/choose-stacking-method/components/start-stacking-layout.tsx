import { FC } from 'react';

import { Box, BoxProps, Flex, FlexProps, styled } from 'leather-styles/jsx';
import { Button, ErrorCircleIcon, ButtonProps } from '@leather.io/ui';
import { token } from 'leather-styles/tokens';

export const StartStackingLayout: FC<BoxProps> = props => (
  <Box style={{ maxWidth: '1400px', margin: '0 auto' }} {...props} />
);

export const StackingOptionsCardContainer: FC<FlexProps> = props => (
  <Flex justifyContent="space-between" {...props} />
);

export const StackingOptionCard: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    flexDirection="column"
    borderRadius="6px"
    margin="auto"
    flex={1}
    maxWidth={[null, null, '320px', '420px']}
    {...props}
  >
    {children}
  </Flex>
);

export const StackingOptionCardTitle: FC<BoxProps> = props => (
  <styled.h1 fontSize="32px" mt="base-loose" {...props} />
);

export const StackingOptionsCardDescription: FC<BoxProps> = props => (
  <styled.p textStyle="label.01" marginTop="extra-loose" {...props} />
);

export const StackingOptionCardBenefitContainer: FC<BoxProps> = props => (
  <Box mt={['tight', 'base', 'base', 'extra-loose']} mb="extra-loose" {...props} />
);

interface StackingOptionCardBenefitProps extends BoxProps {
  icon: FC;
}
export const StackingOptionCardBenefit: FC<StackingOptionCardBenefitProps> = props => {
  const { icon: Icon, ...rest } = props;
  return (
    <Flex alignItems="center" my="base">
      <Flex width="32px" justifyContent="center" alignItems="center" mr="tight">
        <Icon />
      </Flex>
      <styled.p
        display="block"
        textStyle="body.large.medium"
        color={token('colors.ink.text-primary')}
        {...rest}
      />
    </Flex>
  );
};

export const StackingOptionCardButton: FC<ButtonProps> = props => (
  <Button alignSelf="flex-start" mt="base" {...props} />
);

export const InsufficientStackingBalanceWarning: FC<FlexProps> = props => (
  <Flex
    color={token('colors.red.border')}
    ml="base"
    mt="base-tight"
    alignItems="center"
    textStyle="body.small"
    {...props}
  >
    Insufficient balance
    <ErrorCircleIcon width="16px" spacing={4} />
  </Flex>
);
