import type { GetStaticProps, NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";

const Home: NextPage = (props) => {
  const title = "Listado de Pokemons";
  console.log(props);

  return (
    <Layout title={title}>
      <Button color={"gradient"}>Hello world!</Button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    },
  };
};

export default Home;
