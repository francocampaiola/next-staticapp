import { Image } from "@nextui-org/react"


const PokemonLogo = () => {
  return (
    <Image
        src={'/pokeapi_logo.png'}
        width={120}
        alt={'Pokemon Logo'}
    />
  )
}

export default PokemonLogo