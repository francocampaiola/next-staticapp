import type { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import PokemonCard from "../components/ui/PokemonCard";

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
        <PokemonCard pokemons={props.pokemons} />
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
