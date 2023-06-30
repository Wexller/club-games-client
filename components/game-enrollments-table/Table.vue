<script lang="ts" setup>
import {
  useVueTable,
  getCoreRowModel,
  createColumnHelper,
} from '@tanstack/vue-table'
import { h, ref } from '#imports'
import { Button } from '#components'
import TableBody from '~/components/game-enrollments-table/TableBody.vue'
import TableHeader from '~/components/game-enrollments-table/TableHeader.vue'
import LeadCell from '~/components/game-enrollments-table/LeadCell.vue'

type GameEnrollment = {
  date: string
  lead: {
    name: string
    avatarUrl: string
  }
  title: string
  place: string
  price: string
  members: unknown
}

const defaultData: GameEnrollment[] = [
  {
    date: '01.01.2023 \n 19:00 - 22:00',
    lead: {
      name: 'Константин',
      avatarUrl:
        'http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg',
    },
    title: 'Очень Очень Очень Крутая мафия в 2 строчки',
    place: 'Кальянная «ПуперСупер» (Колотушкинская улица, пл., 9, д.2)',
    price: '10 500',
    members: 'осталось 5 мест',
  },
]

const columnHelper = createColumnHelper<GameEnrollment>()

const columns = [
  columnHelper.accessor('date', {
    cell: (props) =>
      h('span', { class: 'whitespace-pre-line text-gray' }, props.getValue()),
    header: () => 'Дата и время',
    size: 150,
  }),
  columnHelper.accessor('lead', {
    header: 'Ведущий',
    cell: (props) => {
      return h(LeadCell, { ...props.getValue() })
    },
    size: 180,
  }),
  columnHelper.accessor('title', {
    header: 'Игра',
    cell: (props) => props.getValue(),
    size: 234,
  }),
  columnHelper.accessor('place', {
    header: 'Место',
    cell: (props) => props.getValue(),
    size: 269,
  }),
  columnHelper.accessor('price', {
    cell: (props) => `${props.getValue()} ₽`,
    header: () => 'Стоимость',
    size: 115,
  }),
  columnHelper.accessor('members', {
    cell: (props) => props.getValue(),
    header: () => 'Участники',
    size: 180,
  }),
  columnHelper.display({
    id: 'participate',
    header: 'Запись на игру',
    size: 136,
    maxSize: 136,
    minSize: 136,
    cell: (props) => h(Button, { variant: 'fill', ...props }, 'Я пойду'),
  }),
]

const data = ref(defaultData)

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <table>
    <TableHeader :get-header-groups="table.getHeaderGroups" />
    <TableBody :get-row-model="table.getRowModel" />
  </table>
</template>
