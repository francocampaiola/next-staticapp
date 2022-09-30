// Importaciones de React
import { FC } from 'react';

// Importaciones de Next
import Head from 'next/head';

// Importaciones de NextUI
import { Navbar, Button } from '@nextui-org/react';

// Importaciones locales
import PokemonLogo from '../ui/PokemonLogo';

// Importaciones de Iconos
import { Heart } from 'react-iconly'

// Tipado de las props
interface Props {
    children: React.ReactNode;
    title?: string;
}

// Componente
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="description" content={`Information about ${title} pokemon`} />
                <meta name="autor" content="Franco Campaiola" />
                <meta name="keywords" content={`${title}, pokemon, app, nextjs, typescript, react, nextui`} />
            </Head>

            <Navbar isCompact isBordered variant='sticky' maxWidth="fluid">
                <Navbar.Brand>
                    <PokemonLogo />
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Button 
                    shadow color="primary" auto
                    icon={<Heart size={'medium'}/>}>
                        Favoritos
                    </Button>
                </Navbar.Content>
            </Navbar>

            <main>
                {children}
            </main>
        </>
    )
}
