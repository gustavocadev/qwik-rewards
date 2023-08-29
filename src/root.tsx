import { Logo } from './components/logo/logo';
import Example from './components/example/Example';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Example />
      </body>
    </>
  );
};
