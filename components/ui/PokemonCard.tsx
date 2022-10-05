import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const PokemonCard: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((item, index) => (
        <Grid xs={6} sm={2} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                width="100%"
                height={140}
                alt={item.img}
              />

            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text>{item.name[0].toUpperCase() + item.name.substring(1)}</Text>
                <Text b>#{item.id}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default PokemonCard