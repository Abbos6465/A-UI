import {type SIZE, VARIANT} from "@/enums/common.enum.ts";
import type {LinkType} from "@/types/common.type";

export interface AButtonPropsType {
    submit?: boolean;
    size?: SIZE;
    text?: string;
    loading?: boolean;
    block?: boolean;
    disabled?: boolean;
    type?: VARIANT;
    color?: string;
    link?: LinkType;
    rounded?: boolean;
    circle?: boolean;
}