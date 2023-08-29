import { component$ } from '@builder.io/qwik';
import { useReward } from '../../hooks/useReward';

export const Reward = component$(() => {
  const { reward } = useReward('some-id', 'emoji');
  return (
    <div>
      <span id="some-id">My Container!</span>

      <button onClick$={() => reward()}>Reward</button>
    </div>
  );
});
