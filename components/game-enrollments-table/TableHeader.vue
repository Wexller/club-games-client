<script lang="ts" setup>
import { FlexRender } from '@tanstack/vue-table'

type Props = {
  getHeaderGroups: () => unknown
}

const props = defineProps<Props>()
</script>

<template>
  <thead class="bg-table-headRowBg px-3 rounded-lg text-gray">
    <tr
      v-for="headerGroup in props.getHeaderGroups()"
      :key="headerGroup.id"
      class="divide-x divide-solid space-x-3 body2 backdrop-blur-sm"
    >
      <th
        v-for="header in headerGroup.headers"
        :key="header.id"
        class="border-table-headerDivider font-medium px-3 py-4"
        :colSpan="header.colSpan"
        :style="{ width: header.column.getSize() + 'px' }"
      >
        <FlexRender
          v-if="!header.isPlaceholder"
          :render="header.column.columnDef.header"
          :props="header.getContext()"
        />
      </th>
    </tr>
  </thead>
</template>
