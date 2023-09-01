<script lang="ts" setup>
import { User } from '~/composables/types'
type Props = {
  participants: User[]
}

const props = defineProps<Props>()

const getImageStyle = (index: number) => ({
  left: `${index * (32 - 8)}px`,
  position: index ? 'absolute' : 'static',
})
</script>

<template>
  <div class="flex relative">
    <template v-for="(participant, index) in props.participants" :key="index">
      <template v-if="index < 5">
        <template v-if="participant.image">
          <img
            :src="participant.image"
            :alt="`Фото участника ${participant.username}`"
            class="rounded-full w-[32px] h-[32px] object-cover overflow-hidden"
            :style="getImageStyle(index)"
          />
        </template>

        <template v-else>
          <SvgoEmptyImage :class="'w-8 h-8'" :style="getImageStyle(index)" />
        </template>
      </template>

      <div
        v-if="props.participants.length > 5"
        class="absolute left-[120px] rounded-full border border-white text-purple font-bold w-[32px] h-[32px] flex items-center justify-center bg-purpleLight"
      >
        {{ `+${props.participants.length - 5}` }}
      </div>
    </template>
  </div>
</template>
