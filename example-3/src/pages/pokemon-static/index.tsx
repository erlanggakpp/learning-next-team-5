import { useEffect } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

interface Pokemon {
    name: string;
    url: string;
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("http://localhost:8000/pokemons");
    const pokemons: Pokemon[] = await res.json();
    return { props: { pokemons: pokemons } };
};

export default function PokemonStaticIndex({ pokemons }: { pokemons: Pokemon[] }) {
    return (
        <>
            <h1>Static</h1>
            {pokemons.map((pokemon) => {
                return <h1 key={pokemon.name}>{pokemon.name}</h1>;
            })}
        </>
    );
}
