import next, { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts';

interface Props {
  id: string,
  name: string
}

const PokemonPage: NextPage<Props> = ({id, name}) => {

  const router = useRouter();
  console.log(router.query)

  return (
    <Layout title={`Pokemon ID ${router.query.id}`}>
      <div>PokemonPage</div>
      <div>ID: {id}</div>
      <div>Name: {name}</div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  return {
    paths: [
      {
        params: {
          
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  return {
    props: {

    },
  };
};

export default PokemonPage