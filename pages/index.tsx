import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[];
}

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.svg

const Home: NextPage<Props> = (props) => {
  const title = "Listado de Pokemons";
  //console.log(props.pokemons);

  return (
    <Layout title={title}>
      <ul>
        <Grid.Container gap={2} justify="flex-start">
          {props.pokemons.map((item, index) => (
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
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((item, index) => {
    return {
      id: index + 1,
      name: item.name,
      url: item.url,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.svg`,
    };
  }, []);

  return {
    props: {
      pokemons
    },
  };
};

export default Home;
