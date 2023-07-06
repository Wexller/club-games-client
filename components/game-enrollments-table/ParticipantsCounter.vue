<script lang="ts" setup>
import { User } from '~/composables/types'

type Props = {
  participants: User[]
  maxParticipants: number
}

const { participants, maxParticipants } = defineProps<Props>()

const participantsCount = participants.length
</script>

<template>
  <div class="flex space-x-1 items-center">
    <span class="px-2 py-1 rounded-md bg-purpleLight text-purple">{{
      `${participantsCount} / ${maxParticipants}`
    }}</span>

    <span class="text-gray">
      <template v-if="participantsCount < maxParticipants">
        осталось {{ maxParticipants - participantsCount }} мест
      </template>

      <template v-if="participantsCount === maxParticipants">
        все места заняты
      </template>
    </span>
  </div>
</template>
