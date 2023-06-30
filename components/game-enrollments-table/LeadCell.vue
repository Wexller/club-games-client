<script lang="ts" setup>
type Props = {
  name: string
  avatarUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex space-x-2 items-center">
    <img
      :src="props.avatarUrl"
      alt="Фото ведущего"
      class="rounded-full w-10 h-10 object-cover"
    />
    <span>{{ props.name }}</span>
  </div>
</template>
