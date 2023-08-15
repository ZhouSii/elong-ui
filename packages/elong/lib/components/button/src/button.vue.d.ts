import type { ButtonPropsType } from './button';
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
        default: () => import("./interface").ButtonType;
        validator(value: import("./interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./interface").ButtonSizeType>;
        validator(value: import("./interface").ButtonSizeType): boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    round: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    nativeType: {
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: () => import("./interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}, {
    props: ButtonPropsType;
    emits: (event: "click", evt: MouseEvent) => void;
    classList: import("vue").ComputedRef<{
        [x: string]: boolean | "default" | "primary" | "success" | "info" | "danger" | "warning" | "medium" | "small" | "mini" | "tiny" | undefined;
        "is-disabled": boolean;
        "is-loading": boolean;
        "is-round": boolean;
        "is-plain": boolean;
        "is-circle": boolean;
    }[]>;
    handlerClick: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => MouseEvent;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./interface").ButtonType>;
        default: () => import("./interface").ButtonType;
        validator(value: import("./interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./interface").ButtonSizeType>;
        validator(value: import("./interface").ButtonSizeType): boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    round: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    nativeType: {
        type: import("vue").PropType<import("./interface").ButtonNativeType>;
        default: () => import("./interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("./interface").ButtonType;
    plain: boolean;
    round: boolean;
    circle: boolean;
    loading: boolean;
    disabled: boolean;
    icon: string;
    autoFocus: boolean;
    nativeType: import("./interface").ButtonNativeType;
}>;
export default _sfc_main;
