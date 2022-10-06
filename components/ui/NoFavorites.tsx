import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        <Text h1>No hay favoritos</Text>
        <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'}
            width={200}
            height={200}
            style={{
                opacity: 0.2
            }}
        />
    </Container>
  )
}

export default NoFavorites;