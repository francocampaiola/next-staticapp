import { FC } from 'react';
import Head from 'next/head';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const Layout : FC<Props> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="description" content={`Information about ${title} pokemon`}/>
                <meta name="autor" content="Franco Campaiola" />
                <meta name="keywords" content={`${title}, pokemon, app, nextjs, typescript, react, nextui`} />
            </Head>

            {/* <Navbar /> */}

            <main>
                { children }
            </main>
        </>
    )
}
