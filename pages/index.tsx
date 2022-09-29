import type { GetStaticProps, NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";

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
  console.log("Test");
  return {
    props: {},
  };
};

export default Home;
