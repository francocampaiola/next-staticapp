import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react"

interface Props {
    pokemonId: number;
}

const FavoritePokemonCard: FC<Props> = ({ pokemonId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} css={{ marginTop: '5px', marginLeft: '10px' }} onClick={onFavoriteClicked}>
            <Card isHoverable isPressable>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    height={300}
                    width={300}
                    alt={pokemonId.toString()}
                />
            </Card>
        </Grid>
    )
}

export default FavoritePokemonCard