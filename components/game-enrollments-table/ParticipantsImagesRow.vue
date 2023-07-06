<script lang="ts" setup>
import { User } from '~/composables/types'

type Props = {
  participants: User[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex relative">
    <template v-for="(participant, index) in props.participants" :key="index">
      <img
        v-if="index < 5"
        :src="participant.image || 'assets/icons/empty-image.svg'"
        :alt="`Фото участника ${participant.username}`"
        class="rounded-full w-[32px] h-[32px] object-cover overflow-hidden"
        :style="{
          left: `${index * (32 - 8)}px`,
          position: index ? 'absolute' : 'static',
        }"
      />
      <div
        v-if="props.participants.length > 5"
        class="absolute left-[120px] rounded-full border border-white text-purple font-bold w-[32px] h-[32px] flex items-center justify-center bg-purpleLight"
      >
        {{ `+${props.participants.length - 5}` }}
      </div>
    </template>
  </div>
</template>
