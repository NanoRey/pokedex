import { PokemonDetailsTypeData } from './pokemonsDetail';

export interface PokemonDetailData {
    id?: number;
    name: string;
    image?: string;
    type?: Array<PokemonDetailsTypeData>;
    url: string;
}

export interface PokemonsData {
    count: number | undefined;
    next: null | string | undefined;
    previous: null | string | undefined;
    results: Array<PokemonDetailData> | undefined;
}
