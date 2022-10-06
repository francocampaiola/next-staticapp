import { Image } from "@nextui-org/react"

export const PokemonLogo = () => {
  return (
    <Image
        src={'/pokeapi_logo.png'}
        width={120}
        alt={'Pokemon Logo'}
    />
  )
}