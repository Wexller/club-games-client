<script lang="ts" setup>
type Variant = 'fill' | 'stroke'

type Props = {
  variant?: Variant
  disabled?: boolean
  big?: boolean
}

const props = defineProps<Props>()

const isFilled = props.variant === 'fill'
const isStroked = props.variant === 'stroke'
</script>

<template>
  <button
    :disabled="props.disabled"
    :style="{ height: props.big ? '64px' : '40px' }"
    :class="{
      'bg-purple hover:bg-purpleHover active:bg-purpleActive disabled:bg-gray2 text-white':
        isFilled,
      'border border-purple active:border-purpleActive disabled:border-gray2 hover:text-purpleHover active:text-purpleActive disabled:text-gray2':
        isStroked,
    }"
    class="flex space-x-2 justify-center items-center px-6 py-[9px] rounded-sm transition"
  >
    <slot />
  </button>
</template>

<style scoped>
:slotted(svg) {
  fill: currentColor;
  stroke: currentColor;
}
</style>
