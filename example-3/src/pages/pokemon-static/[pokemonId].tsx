import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

interface PokemonIdPageProps {
    pokemon: string;
}

export default function PokemonIdStaticPage({ pokemon }: { pokemon: string }) {
    const router = useRouter();
    return <h1>Pokemon ID {pokemon} </h1>;
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: [{ params: { pokemonId: "1" } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    return {
        props: {
            pokemon: params?.pokemonId,
        },
    };
};
