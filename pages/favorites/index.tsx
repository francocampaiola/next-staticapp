import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"

const Favorites: NextPage = () => {
  return (
    <Layout title="Favoritos">
        <NoFavorites />
    </Layout>
  )
}

export default Favorites