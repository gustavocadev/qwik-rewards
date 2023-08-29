import { Logo } from './components/logo/logo';
import { Reward } from './components/reward';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Reward />
      </body>
    </>
  );
};
