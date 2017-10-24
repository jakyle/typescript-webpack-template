import './index.scss';

export const hello = () => 'Hello world!';

(window as any).hello = hello;
