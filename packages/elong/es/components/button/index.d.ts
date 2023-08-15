export declare const ELongButton: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./src/interface").ButtonType>;
        default: () => import("./src/interface").ButtonType;
        validator(value: import("./src/interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/interface").ButtonSizeType>;
        validator(value: import("./src/interface").ButtonSizeType): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
        default: () => import("./src/interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}, {
    props: import("./src/button").ButtonPropsType;
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
        type: import("vue").PropType<import("./src/interface").ButtonType>;
        default: () => import("./src/interface").ButtonType;
        validator(value: import("./src/interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/interface").ButtonSizeType>;
        validator(value: import("./src/interface").ButtonSizeType): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
        default: () => import("./src/interface").ButtonNativeType;
        validator(value: any): boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("./src/interface").ButtonType;
    plain: boolean;
    round: boolean;
    circle: boolean;
    loading: boolean;
    disabled: boolean;
    icon: string;
    autoFocus: boolean;
    nativeType: import("./src/interface").ButtonNativeType;
}>;
export default ELongButton;
