import { useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

interface Pokemon {
    name: string;
    url: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch("http://localhost:8000/pokemons");
    const pokemons: Pokemon[] = await res.json();
    // Pass data to the page via props
    return { props: { pokemons: pokemons } };
};

export default function PokemonIndex({ pokemons }: { pokemons: Pokemon[] }) {
    return (
        <>
            {pokemons.map((pokemon) => {
                return <h1 key={pokemon.name}>{pokemon.name}</h1>;
            })}
        </>
    );
}
