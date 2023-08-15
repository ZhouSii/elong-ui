import type { ExtractPropTypes, PropType } from "vue";
import type { ButtonNativeType, ButtonSizeType, ButtonType } from "./interface";
export declare const Props: {
    type: {
        type: PropType<ButtonType>;
        default: () => ButtonType;
        validator(value: ButtonType): boolean;
    };
    size: {
        type: PropType<ButtonSizeType>;
        validator(value: ButtonSizeType): boolean;
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
        type: PropType<ButtonNativeType>;
        default: () => ButtonNativeType;
        validator(value: any): boolean;
    };
};
export declare const Emits: {
    click: (evt: MouseEvent) => MouseEvent;
};
export declare type ButtonPropsType = ExtractPropTypes<typeof Props>;
