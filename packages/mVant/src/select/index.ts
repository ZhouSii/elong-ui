import _select from './src/index.vue';

import { withInstall } from '../utils';

export const EvSelect = withInstall(_select);

export default EvSelect;

declare module 'vue' {
  export interface GlobalComponents {
    EvSelect: typeof EvSelect;
  }
}
