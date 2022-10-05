import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import PokemonCard from "../components/pokemon/PokemonCard";
import { Grid } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = (props) => {
  const title = "Listado de Pokemons";

  return (
    <Layout title={title}>
      <ul>
        <Grid.Container gap={2} justify="flex-start">
          {props.pokemons.map((item) => (
            <PokemonCard pokemon={item} key={item.id} />
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
      ...item,
      id: index + 1,
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
