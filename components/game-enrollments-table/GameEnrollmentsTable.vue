<script lang="ts" setup>
import TableBody from '~/components/game-enrollments-table/TableBody.vue'
import TableHeader from '~/components/game-enrollments-table/TableHeader.vue'
import { GameEnrollment } from '~/composables/types'

export type ColumnsData = {
  title: string
  size: number
}

const gameEnrollmentsData: GameEnrollment[] = [
  {
    id: 1,
    date: new Date(),
    host: {
      username: 'Константин',
      image:
        'http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg',
    },
    game: {
      title: 'Очень Очень Очень Крутая мафия в 2 строчки',
    },
    location: {
      title: 'Кальянная «ПуперСупер»',
      address: '(Колотушкинская улица, пл., 9, д.2)',
    },
    price: '10 500',
    participants: [
      {
        username: 'Олег',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg',
      },
      { username: 'Сергей', image: '' },
      {
        username: 'Владимир',
        image:
          'http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n',
      },
      {
        username: 'Артем',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg',
      },
      { username: 'Никита', image: '' },
      { username: 'Диана', image: '' },
      { username: 'Алена', image: '' },
      { username: 'Игорь', image: '' },
    ],
    maxParticipants: 15,
    completed: false,
  },
  {
    id: 2,
    date: new Date(),
    host: {
      username: 'Константин',
      image:
        'http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg',
    },
    game: {
      title: 'Очень Очень Очень Крутая мафия в 2 строчки',
    },
    location: {
      title: 'Кальянная «ПуперСупер»',
      address: '(Колотушкинская улица, пл., 9, д.2)',
    },
    price: '10 500',
    participants: [
      {
        username: 'Олег',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg',
      },
      { username: 'Сергей', image: '' },
      {
        username: 'Владимир',
        image:
          'http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n',
      },
      {
        username: 'Артем',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg',
      },
      { username: 'Никита', image: '' },
      { username: 'Диана', image: '' },
      { username: 'Алена', image: '' },
      { username: 'Игорь', image: '' },
    ],
    maxParticipants: 8,
    completed: false,
  },
  {
    id: 2,
    date: new Date(),
    host: {
      username: 'Константин',
      image:
        'http://80.249.149.128:1337/uploads/thumbnail_360_F_224869519_a_Rae_Lneq_A_Lf_PN_Bzg0xx_MZ_Xghtv_B_Xkf_IA_09b42d8679.jpg',
    },
    game: {
      title: 'Очень Очень Очень Крутая мафия в 2 строчки',
    },
    location: {
      title: 'Кальянная «ПуперСупер»',
      address: '(Колотушкинская улица, пл., 9, д.2)',
    },
    price: '10 500',
    participants: [
      {
        username: 'Олег',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_2_d236d21640.jpg',
      },
      { username: 'Сергей', image: '' },
      {
        username: 'Владимир',
        image:
          'http://80.249.149.128:1337/uploads/thumbnail_3_2287a7ea53.jpeg\n',
      },
      {
        username: 'Артем',
        image: 'http://80.249.149.128:1337/uploads/thumbnail_1_bff1055cf7.jpg',
      },
      { username: 'Никита', image: '' },
      { username: 'Диана', image: '' },
      { username: 'Алена', image: '' },
      { username: 'Игорь', image: '' },
    ],
    maxParticipants: 10,
    completed: false,
  },
]

const columnsData = [
  {
    title: 'Дата и время',
    size: 150,
  },
  {
    title: 'Ведущий',
    size: 180,
  },
  {
    title: 'Игра',
    size: 234,
  },
  {
    title: 'Место',
    size: 269,
  },
  {
    title: 'Стоимость',
    size: 115,
  },
  {
    title: 'Участники',
    size: 180,
  },
  {
    title: 'Запись на игру',
    size: 136,
  },
]
</script>

<template>
  <table>
    <TableHeader :columns-data="columnsData" />
    <TableBody :rows-data="gameEnrollmentsData" />
  </table>
</template>
