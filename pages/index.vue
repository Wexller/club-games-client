<script setup lang="ts">
import { useAuth, useGames } from '#imports'
import Button from '~/components/Button.vue'
import GameEnrollmentsTable from '~/components/game-enrollments-table/GameEnrollmentsTable.vue'
import Section from '~/components/Section.vue'

const isAuthed = useAuth()

const { findGames, findOneGame } = useGames()

const slogan = 'Собирай друзей \n и побеждайте вместе'
</script>

<template>
  <SvgoMainBackground class="bg-svg" />

  <h1 class="text-center whitespace-pre-line mt-[169px]">{{ slogan }}</h1>
  <p class="body1 text-center mt-4">
    Забронируй место на нашу настольную игру прямо сейчас!
  </p>

  <Section class="mt-[203px]" :heading="'Играют сейчас'">
    <GameEnrollmentsTable />
  </Section>

  <Section :heading="'Ближайшие игры'">
    <GameEnrollmentsTable />
  </Section>

  <div class="flex flex-col items-center justify-center mt-[145px]">
    <h2>Попробуй новый формат общения</h2>

    <div class="flex items-center space-x-[37px]">
      <span class="whitespace-pre-line">{{
        'Выбери удобное для тебя \n время в нашем расписании'
      }}</span>
      <h2>окунувшись в <b>мир игр</b></h2>
    </div>

    <Button class="mt-10 w-[440px]" variant="fill" big
      >Полное расписание</Button
    >
  </div>

  <!--  <LoginForm v-if="!isAuthed" />-->

  <!--  <button @click="findGames">Получить игры</button>-->

  <!--  <Button variant="stroke">Войти <SvgoPlus /></Button>-->
</template>

<style scoped></style>
