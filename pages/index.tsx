import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts/Layout'

const Home: NextPage = () => {

  const title = 'Listado de Pokemons'

  return (
    <Layout title={title}>
      <Button color={'gradient'}>Hello world!</Button>
    </Layout>
  )
}

export default Home