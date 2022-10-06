import { Card, Grid } from "@nextui-org/react"
import { NextPage } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import localFavorites from "../../utils/localFavorites"

const Favorites: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, []);


  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ?
        (
          <NoFavorites />
        )
        :
        (
          <>
            <Grid.Container>
              {
                favoritePokemons.map(id => (
                  <Grid xs={6} sm={3} md={2} xl={1} key={id} css={{ marginTop: '5px', marginLeft: '10px' }}>
                    <Card isHoverable isPressable>
                      <Link href={`/pokemon/${id}`}>
                        <Card.Image
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                          height={300}
                          width={300}
                          alt={id.toString()}
                        />
                      </Link>
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          </>
        )
      }
    </Layout>
  )
}

export default Favorites