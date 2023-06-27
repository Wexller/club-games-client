<script setup lang="ts">
import { useStrapiAuth, useStrapiUser } from '#imports'

const { login } = useStrapiAuth()
const user = useStrapiUser()

const fn = async () => {
  await login({ identifier: 'test@mail.ru', password: '123456' })

  console.log(user._object.$sstrapi_user)
}

fn()
</script>

<template>
  <h1>Club games</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi deserunt
    enim est explicabo illo nisi obcaecati porro quod, rerum.
  </p>
</template>
