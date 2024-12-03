import { FC } from 'react';

import { Box, BoxProps, Flex, FlexProps, Grid, GridProps, styled } from 'leather-styles/jsx';
import { Button, ButtonProps, ErrorCircleIcon } from '@leather.io/ui';
import { token } from 'leather-styles/tokens';

export const StartStackingLayout: FC<BoxProps> = props => (
  <Box
    backgroundColor={token('colors.ink.background-primary')}
    style={{ maxWidth: '1400px', margin: '0 auto' }}
    {...props}
  />
);
export const StackingOptionsCardContainer: FC<GridProps> = props => (
  <Grid gridTemplateColumns={'1fr 1fr 1fr'} gridGap={0} {...props} />
);

export const StackingOptionCard: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    flexDirection="column"
    borderRadius="6px"
    margin="auto"
    maxWidth={[null, null, '320px', '420px']}
    minHeight={['320px', '420px']}
    style={{ padding: token('spacing.space.03'), border: `${token('borders.subdued')}` }}
    {...props}
  >
    {children}
  </Flex>
);

export const StackingOptionCardTitle: FC<BoxProps> = props => (
  <styled.h1 textStyle="heading.01" fontSize="32px" mt="base-loose" {...props} />
);

export const StackingOptionsCardDescription: FC<BoxProps> = props => (
  <styled.p textStyle="body.01" marginTop="extra-loose" {...props} />
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
  <Button variant="solid" alignSelf="flex-start" mt="base" {...props} />
);

export const InsufficientStackingBalanceWarning: FC<FlexProps> = props => (
  <Flex color={token('colors.red.border')} alignItems="center" {...props}>
    <styled.span textStyle="label.02" textAlign={'bottom'} marginLeft="loose">
      Insufficient balance
    </styled.span>
    <ErrorCircleIcon variant="small" color={token('colors.red.action-primary-default')} />
  </Flex>
);
