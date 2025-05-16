<script
		setup
		lang="ts"
>

import type {AIconPropsType} from "@/components/ui/a-icon/a-icon.types";
import useAIcon from "@/components/ui/a-icon/useAIcon.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<AIconPropsType>(), {
	size: 16
});

const {isSlot, SVGComponent} = useAIcon(props);

const iconStyles = computed(() => {
	const size = {
		width: props.width || props.size,
		height: props.height || props.size
	};

	(Object.keys(size) as Array<keyof typeof size>).forEach((key) => {
		size[key] = typeof size[key] === "number" ? `${size[key]}px` : size[key];
	});


	const fontSize = typeof props.size === "number" ? `${props.size}px` : props.size;
	const width = typeof props.width === "number" ? `${props.width}px` : props.width;
	const height = typeof props.height === "number" ? `${props.height}px` : props.height;

	return {
		color: props.color,
		width,
		height,
		fontSize
	};
});

</script>

<template>
	<i
			class="a-icon"
			:style="iconStyles"
	>
		<slot v-if="isSlot"/>
		<SVGComponent v-else/>
	</i>
</template>

<style lang="scss">
.a-icon {
	display: inline-block;

	svg {
		font-size: inherit;
		width: 1em;
		height: 1em;
	}
}
</style>