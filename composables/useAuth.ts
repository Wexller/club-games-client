import { useCookie, useStrapiAuth, watchEffect } from '#imports'

export const useAuth = () => {
  const { setToken } = useStrapiAuth()
  const cookie = useCookie('jwt', { maxAge: 5 * 60 })

  watchEffect(() => {
    if (cookie.value) {
      setToken(cookie.value)
    }
  })

  return !!cookie.value
}
