import type {AIconPropsType} from "@/components/ui/a-icon/a-icon.types";
import {computed, defineAsyncComponent} from "vue";

export default (props: AIconPropsType) => {
    const {url} = props;

    const isSlot = computed(() => !url);

    const SVGComponent = computed<ReturnType<typeof defineAsyncComponent> | null>(
        () => {
            return !isSlot.value
                ? defineAsyncComponent(() => import(`@/assets/icons/${url}.svg`))
                : null;
        }
    );

    return {
        isSlot,
        SVGComponent
    };
}