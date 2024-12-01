import { useAuth } from '@components/auth-provider/auth-provider';
import { useNavigate } from '@hooks/use-navigate';

import { StackingOptionCardButton as OptionButton } from '../components/start-stacking-layout';
import { ChooseStackingMethodLayoutProps } from '../types';

export function LiquidStackingButton(props: ChooseStackingMethodLayoutProps) {
  const navigate = useNavigate();
  const { signIn, isSigningIn } = useAuth();

  const isDisabled = props.isSignedIn ? !props.hasEnoughBalanceToPool : isSigningIn;

  return (
    <OptionButton
      onClick={() => {
        if (!props.isSignedIn) {
          signIn();
          return;
        }

        navigate('../start-liquid-stacking');
      }}
      isDisabled={isDisabled}
    >
      Stack liquid
    </OptionButton>
  );
}
