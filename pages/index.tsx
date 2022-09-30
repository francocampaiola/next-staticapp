import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = (props) => {
  const title = "Listado de Pokemons";
  console.log(props.pokemons);

  return (
    <Layout title={title}>
      <ul>
        <Grid.Container gap={2} justify="flex-start">
          {props.pokemons.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={"https://nextui.org" + item.img}
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt={item.img}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{item.name}</Text>
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

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default Home;
