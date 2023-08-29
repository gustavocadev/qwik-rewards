import type { QRL } from '@builder.io/qwik';

export type ConfettiConfig = {
  lifetime?: number;
  angle?: number;
  decay?: number;
  spread?: number;
  startVelocity?: number;
  elementCount?: number;
  elementSize?: number;
  zIndex?: number;
  position?: string;
  colors?: string[];
  onAnimationComplete?: QRL<() => void>;
};
