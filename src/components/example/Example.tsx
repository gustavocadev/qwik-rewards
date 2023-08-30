/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$ } from '@builder.io/qwik';
import { useReward } from '../../hooks/useReward';

export default component$(() => {
  const config = {
    startVelocity: 10,
    spread: 180,
    elementCount: 100,
    // etc...
    // you can make this reactive instead etc.
  };

  // useReward has the following arguments:
  // userReward(id, type, config)
  // type can be one of 'confetti', 'balloons' or 'emoji'
  // no need to add # before the id
  // see below for all of the config options
  // to trigger the animation, call the reward function
  // isAnimating is a boolean that is true when the animation is running

  //  you can trigger the animation onclick
  // I have renamed reward to balloonsReward etc.

  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward('some-id', 'balloons', config);

  return (
    <div>
      <span id="some-id">My Container!</span>

      <button onClick$={() => balloonsReward()}>Reward</button>
    </div>
  );
});
