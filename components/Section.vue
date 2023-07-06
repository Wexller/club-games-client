<script lang="ts" setup>
type Props = {
  heading?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section class="pt-[100px] pb-[60px]">
    <h3 v-if="props.heading" class="mb-10">{{ props.heading }}</h3>
    <slot />
  </section>
</template>
