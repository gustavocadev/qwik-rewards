import type { QRL } from '@builder.io/qwik';

export type EmojiConfig = {
  lifetime?: number;
  angle?: number;
  decay?: number;
  spread?: number;
  startVelocity?: number;
  elementCount?: number;
  elementSize?: number;
  zIndex?: number;
  position?: string;
  emoji?: string[];
  onAnimationComplete?: QRL<() => void>;
};
