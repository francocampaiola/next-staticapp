import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <Grid xs={6} sm={2} key={pokemon.id}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width="100%"
            height={140}
            alt={pokemon.img}
          />

        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text b>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonCard