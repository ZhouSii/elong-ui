import * as components from "./components";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ELongButton: typeof components.ELongButton;
    // EaIcon: typeof components.Icon;
  }
}
export {};
