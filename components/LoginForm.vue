<script lang="ts" setup>
import {
  ref,
  useCookie,
  useStrapiAuth,
  useStrapiToken,
  watchEffect,
} from '#imports'

const { login } = useStrapiAuth()

const identifier = ref('')
const password = ref('')

const handleSubmit = () => {
  login({ identifier: identifier.value, password: password.value })
}

const token = useStrapiToken()
const cookie = useCookie('jwt', { maxAge: 5 * 60 })

watchEffect(() => {
  if (token.value) {
    cookie.value = token.value
  }
})
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <label for="identifier">{{ $t('form.login') }}</label>
    <input id="identifier" v-model="identifier" type="text" />

    <label for="password">{{ $t('form.password') }}</label>
    <input id="password" v-model="password" type="password" />

    <button type="submit">{{ $t('form.submit') }}</button>
  </form>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: max-content;
  border: 1px solid black;
  padding: 20px;
}
</style>
