<script lang="ts" setup>
import Section from '~/components/Section.vue'
import GameEnrollmentsTable from '~/components/game-enrollments-table/GameEnrollmentsTable.vue'
</script>

<template>
  <SvgoGameScheduleBackground class="bg-svg" />

  <Section :heading="'Сегодня, 23 июля'">
    <GameEnrollmentsTable />
  </Section>
</template>
