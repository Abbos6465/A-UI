import type {RouteRecordRaw} from "vue-router";

export interface LinkType {
    url: RouteRecordRaw | string;
    target?: "_blank";
}

export type StringOrNumberType = string | number;