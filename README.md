![vue-rewards logo](https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f 'qwik-rewards')
[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.0&x2=0)](https://badge.fury.io/js/qwik-rewards)

[![npm version](https://badge.fury.io/js/react-rewards.svg)](https://badge.fury.io/js/react-rewards)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/gustavocadev)

This package is a port of [react-rewards](https://github.com/thedevelobear/react-rewards).

## Demo

Here is a [simple demo](#) and here's the [code for the demo](https://github.com/gustavocadev/qwik-rewards-demo).

## About

**qwik-rewards** lets you add micro-interactions to your app, and rewards users with the rain of confetti, emoji or balloons in seconds.
Firing confetti all over the page may seem like a questionable idea, but keep in mind that rewarding users for their actions is not.
If a huge cloud of smiling emoji doesn't fit your application well, try changing the physics config to make it more subtle.

You can read more on the subject of micro-interactions in this blog – https://www.thedevelobear.com/post/microinteractions/

## Installation

```
pnpm install qwik-rewards
```

or

```
bun add qwik-rewards
```

or

```
npm install qwik-rewards
```

## Usage

In order to use the rewards, you'll need to provide an element that will become the origin of the animation. This element needs to have an ID that matches the one used - it can be anywhere in the DOM as long as the IDs match.

You can place the element inside a button, center it and shoot up from the button.
You can place it on top of the viewport with position: "fixed" and change the angle to 270, to shoot downwards.
Try, experiment, **have fun!**

Animation particles are set to position: 'fixed' by default, but this can be changed through a config object.

You can use this package in both the composition API and the options API.

### Using the Qwik Component

```tsx
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

  // you can trigger the animation onclick
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
```

### Props & config

useReward/$reward params:

| name   | type   | description                                       | required   | default   |
| ------ | ------ | ------------------------------------------------- | ---------- | --------- |
| id     | string | A unique id of the element you want to shoot from | yes        |           |
| type   | string | 'confetti'                                        | 'balloons' | 'emoji'   |
| config | object | a configuration object described below            | no         | see below |

Confetti config object:

| name                | type       | description                                        | default                                                 |
| ------------------- | ---------- | -------------------------------------------------- | ------------------------------------------------------- |
| lifetime            | number     | time of life                                       | 200                                                     |
| angle               | number     | initial direction of particles in degrees          | 90                                                      |
| decay               | number     | how much the velocity decreases with each frame    | 0.94                                                    |
| spread              | number     | spread of particles in degrees                     | 45                                                      |
| startVelocity       | number     | initial velocity of particles                      | 35                                                      |
| elementCount        | number     | particles quantity                                 | 50                                                      |
| elementSize         | number     | particle size in px                                | 8                                                       |
| zIndex              | number     | z-index of particles                               | 0                                                       |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"                                                 |
| colors              | string[]   | An array of colors used when generating confetti   | ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined                                               |

Balloons config object:

| name                | type       | description                                        | default                                                 |
| ------------------- | ---------- | -------------------------------------------------- | ------------------------------------------------------- |
| lifetime            | number     | time of life                                       | 600                                                     |
| angle               | number     | initial direction of balloons in degrees           | 90                                                      |
| decay               | number     | how much the velocity decreases with each frame    | 0.999                                                   |
| spread              | number     | spread of balloons in degrees                      | 50                                                      |
| startVelocity       | number     | initial velocity of the balloons                   | 3                                                       |
| elementCount        | number     | balloons quantity                                  | 10                                                      |
| elementSize         | number     | balloons size in px                                | 20                                                      |
| zIndex              | number     | z-index of balloons                                | 0                                                       |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"                                                 |
| colors              | string[]   | An array of colors used when generating balloons   | ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined                                               |

Emoji config object:

| name                | type       | description                                        | default            |
| ------------------- | ---------- | -------------------------------------------------- | ------------------ |
| lifetime            | number     | time of life                                       | 200                |
| angle               | number     | initial direction of emoji in degrees              | 90                 |
| decay               | number     | how much the velocity decreases with each frame    | 0.94               |
| spread              | number     | spread of emoji in degrees                         | 45                 |
| startVelocity       | number     | initial velocity of emoji                          | 35                 |
| elementCount        | number     | emoji quantity                                     | 20                 |
| elementSize         | number     | emoji size in px                                   | 25                 |
| zIndex              | number     | z-index of emoji                                   | 0                  |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"            |
| emoji               | string[]   | An array of emoji to shoot                         | ['🤓', '😊', '🥳'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined          |
