import type { App, Component } from 'vue';
declare type EventShim = {
    new (...args: unknown[]): {
        $props: {
            onClick?: (...args: unknown[]) => void;
        };
    };
};
export declare type WithInstall<T> = T & {
    install(app: App): void;
} & EventShim;
export declare function withInstall<T extends Component>(options: T): WithInstall<T>;
export {};
