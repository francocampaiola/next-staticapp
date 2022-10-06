import { Grid, Card } from "@nextui-org/react";
import { FC } from "react"
import FavoritePokemonCard from "./FavoritePokemonCard";

interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container>
            {
                pokemons.map(id => (
                    <FavoritePokemonCard key={id} pokemonId={id} />
                ))
            }
        </Grid.Container>
    )
}

export default FavoritePokemons