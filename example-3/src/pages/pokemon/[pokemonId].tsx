import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { pokemonId } = context.params as { pokemonId: string };
    // Fetch data from external API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = await res.json();
    // Pass data to the page via props
    return { props: { pokemon: pokemon } };
};

export default function PokemonIdPage({ pokemon }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Pokemon: {pokemon.name}</title>
            </Head>
            <Head>
                <meta property="pokemon-name" content={pokemon.name} key="title" />
            </Head>
            <h1>
                Pokemon ID {pokemon.id}: {pokemon.name}
            </h1>
            {/* <h1>Testing</h1> */}
        </>
    );
}
