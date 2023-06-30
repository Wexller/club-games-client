<script lang="ts" setup>
import Button from '~/components/Button.vue'
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <header class="flex h-20 justify-between items-center">
    <NuxtLink to="/">{{ $t('main') }}</NuxtLink>

    <Navbar />

    <Button variant="fill">Войти</Button>
  </header>
</template>
