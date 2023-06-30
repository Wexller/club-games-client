<script setup lang="ts">
import { useAuth, useGames } from '#imports'
import Table from '~/components/game-enrollments-table/Table.vue'
import Section from '~/components/Section.vue'

const isAuthed = useAuth()

const { findGames, findOneGame } = useGames()

const slogan = 'Собирай друзей \n и побеждайте вместе'
</script>

<template>
  <Header />

  <h1 class="text-center whitespace-pre-line mt-[169px]">{{ slogan }}</h1>
  <p class="body1 text-center mt-4">
    Забронируй место на нашу настольную игру прямо сейчас!
  </p>

  <Section class="mt-[203px]" :heading="'Играют сейчас'">
    <Table />
  </Section>

  <!--  <LoginForm v-if="!isAuthed" />-->

  <!--  <button @click="findGames">Получить игры</button>-->

  <!--  <Button variant="stroke">Войти <SvgoPlus /></Button>-->
</template>

<style scoped></style>
