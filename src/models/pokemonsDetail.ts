export interface PokemonDetailsTypeData {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    image: string;
    type: Array<PokemonDetailsTypeData>;
    url: string;
}
