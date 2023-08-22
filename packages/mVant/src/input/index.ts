import { withInstall } from '../utils';

import _input from './src/index.vue';

export const EvInput = withInstall(_input);

export default EvInput;

declare module 'vue' {
  export interface GlobalComponents {
    EvInput: typeof EvInput;
  }
}
