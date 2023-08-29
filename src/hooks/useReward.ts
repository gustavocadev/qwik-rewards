import { $, useSignal } from '@builder.io/qwik';
import { getContainerById } from '../helpers';
import { confetti } from '../components/confetti/confetti';
import { balloons } from '../components/balloons/balloons';
import { BalloonsConfig } from '../types/BalloonsConfig';
import { EmojiConfig } from '../types/EmojiConfig';
import { ConfettiConfig } from '../types/ConfettiConfig';
import { emoji } from '../components/emoji/emoji';

export type RewardType = 'confetti' | 'emoji' | 'balloons';
export type RewardConfig =
  | BalloonsConfig
  | EmojiConfig
  | ConfettiConfig
  | undefined;

export function useReward(id: string, type: RewardType, config?: RewardConfig) {
  const isAnimating = useSignal(false);

  const internalAnimatingCallback = $(() => {
    isAnimating.value = false;
  });

  const reward = $(async () => {
    const foundContainer = await getContainerById(id);
    if (!foundContainer) return;
    isAnimating.value = true;
    switch (type) {
      case 'confetti':
        confetti(foundContainer, internalAnimatingCallback, config);
        break;
      case 'emoji':
        emoji(foundContainer, internalAnimatingCallback, config);
        break;
      case 'balloons':
        balloons(foundContainer, internalAnimatingCallback, config);
        break;
      default:
        console.error(`${type} is not a valid react-rewards type.`);
    }
  });

  return { isAnimating, reward };
}
