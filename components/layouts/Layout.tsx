// Importaciones de React
import { FC } from 'react';

// Importaciones de Next
import Head from 'next/head';
import NextLink from 'next/link';

// Importaciones de NextUI
import { Navbar, Text, Link } from '@nextui-org/react';

// Importaciones locales
import PokemonLogo from '../ui/PokemonLogo';

// Importaciones de Iconos
import { Heart } from 'react-iconly';

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
                    <NextLink href="/" passHref>
                        <Link>
                            <PokemonLogo />
                        </Link>
                    </NextLink>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <NextLink href="/favorites" passHref>
                        <Link>
                            <Text>
                                Favoritos
                            </Text>
                        </Link>
                    </NextLink>
                </Navbar.Content>
            </Navbar>

            <main>
                {children}
            </main>
        </>
    )
}
