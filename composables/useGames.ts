import { useAsyncData, useStrapi } from '#imports'

const contentType = 'games'

export const useGames = () => {
  const { find, findOne, update, create } = useStrapi()

  const findGames = async () => {
    const res = await useAsyncData('games', () => find(contentType))

    return res
  }

  const findOneGame = async (gameId: number) => {
    const res = await useAsyncData(`games/${gameId}`, () => find(contentType))

    return res
  }

  return {
    findGames,
    findOneGame,
  }
}
