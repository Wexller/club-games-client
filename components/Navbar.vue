<script lang="ts" setup></script>

<template>
  <nav>
    <ul class="flex space-x-[50px]">
      <li>
        <NuxtLink class="link" to="/games/schedule">{{
          $t('schedule')
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/archive">{{ $t('archive') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/games">{{ $t('games') }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply text-white text-body2;
}
</style>
