<script setup></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">{{ $t('main') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/schedule">{{ $t('schedule') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/archive">{{ $t('archive') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/games">{{ $t('games') }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <slot />
</template>
