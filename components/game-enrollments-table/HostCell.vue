<script lang="ts" setup>
import { User } from '~/composables/types'

type Props = {
  host: User
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex space-x-2 items-center">
    <img
      :src="props.host.image"
      alt="Фото ведущего"
      class="rounded-full w-10 h-10 object-cover"
    />
    <span>{{ props.host.username }}</span>
  </div>
</template>
