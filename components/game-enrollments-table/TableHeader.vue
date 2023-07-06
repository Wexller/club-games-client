<script lang="ts" setup>
import { ColumnsData } from '~/components/game-enrollments-table/GameEnrollmentsTable.vue'

type Props = {
  columnsData: ColumnsData[]
}

const props = defineProps<Props>()
</script>

<template>
  <thead class="bg-table-headRowBg px-3 rounded-lg text-gray">
    <tr class="divide-x divide-solid space-x-3 body2 backdrop-blur-sm">
      <th
        v-for="column in props.columnsData"
        :key="column.title"
        class="border-table-headerDivider font-medium px-3 py-4"
        :style="{ width: column.size + 'px' }"
      >
        {{ column.title }}
      </th>
    </tr>
  </thead>
</template>
