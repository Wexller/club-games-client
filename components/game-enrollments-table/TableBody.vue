<script lang="ts" setup>
import Button from '~/components/Button.vue'
import DateCell from '~/components/game-enrollments-table/DateCell.vue'
import HostCell from '~/components/game-enrollments-table/HostCell.vue'
import ParticipantsCounter from '~/components/game-enrollments-table/ParticipantsCounter.vue'
import ParticipantsImagesRow from '~/components/game-enrollments-table/ParticipantsImagesRow.vue'
import { GameEnrollment } from '~/composables/types'

type Props = {
  rowsData: GameEnrollment[]
}

const props = defineProps<Props>()
</script>

<template>
  <tbody class="flex flex-col">
    <tr
      v-for="(row, index) in props.rowsData"
      :key="index"
      class="bg-table-bodyRowBg mt-3 rounded-lg px-3 py-4 space-x-3 backdrop-blur-sm [&>td]:px-3 [&>td]:py-4 body2"
    >
      <td class="w-[150px]">
        <DateCell :date="row.date" />
      </td>

      <td class="w-[180px]">
        <HostCell :host="row.host" />
      </td>

      <td class="w-[234px]">
        {{ row.game.title }}
      </td>

      <td class="w-[269px]">
        <span class="whitespace-pre-line">
          {{ `${row.location.title} \n ${row.location.address}` }}
        </span>
      </td>

      <td class="w-[115px]">
        {{ `${row.price} ₽` }}
      </td>

      <td class="w-[180px] space-y-2 flex flex-col body3">
        <ParticipantsImagesRow :participants="row.participants" />

        <ParticipantsCounter
          :participants="row.participants"
          :max-participants="row.maxParticipants"
        />
      </td>

      <td class="w-[136px] flex items-center">
        <Button
          v-if="row.participants.length < row.maxParticipants"
          :variant="'fill'"
          @click="() => console.log(row.id)"
          >Я пойду</Button
        >
        <button
          v-if="row.participants.length === row.maxParticipants"
          class="text-purple body2 text-left"
          @click="() => console.log('show available')"
        >
          Показать свободные
        </button>
      </td>
    </tr>
  </tbody>
</template>
