<script lang="ts" setup>
import { FlexRender } from '@tanstack/vue-table'

type Props = {
  getRowModel: () => unknown
}

const props = defineProps<Props>()
</script>

<template>
  <tbody>
    <tr
      v-for="row in props.getRowModel().rows"
      :key="row.id"
      class="bg-table-bodyRowBg mt-3 rounded-lg px-3 py-4 space-x-3 backdrop-blur-sm"
    >
      <td
        v-for="cell in row.getVisibleCells()"
        :key="cell.id"
        class="px-3 py-4 body2"
        :style="{ width: cell.column.getSize() + 'px' }"
      >
        <FlexRender
          :render="cell.column.columnDef.cell"
          :props="cell.getContext()"
        >
        </FlexRender>
      </td>
    </tr>
  </tbody>
</template>
