import { PokemonsData } from '../../models/pokemons';
import { PokemonDetails } from '../../models/pokemonsDetail';

export const SET_POKEMONS_CONTENT = 'SET_POKEMONS_CONTENT';
export const SET_POKEMON_DETAIL = 'SET_POKEMON_DETAIL';
export const SET_POKEMONS_FILTERED = 'SET_POKEMONS_FILTERED';

export interface SetPokemonsAction {
    type: typeof SET_POKEMONS_CONTENT;
    payload: {
        pokemonsContent: PokemonsData;
    };
}

export interface SetPokemonDetailAction {
    type: typeof SET_POKEMON_DETAIL;
    payload: {
        pokemonDetail: Array<PokemonDetails>;
    };
}

export interface SetPokemonsFilteredAction {
    type: typeof SET_POKEMONS_FILTERED;
    payload: {
        pokemonsFiltered: PokemonDetails[];
    };
}

export type ActionsType = SetPokemonDetailAction | SetPokemonsAction | SetPokemonsFilteredAction;

export const setPokemons = (content: PokemonsData): SetPokemonsAction => {
    return {
        type: SET_POKEMONS_CONTENT,
        payload: {
            pokemonsContent: content,
        },
    };
};

export const setPokemonsDetail = (details: Array<PokemonDetails>): SetPokemonDetailAction => {
    return {
        type: SET_POKEMON_DETAIL,
        payload: {
            pokemonDetail: details,
        },
    };
};

export const SetPokemonsFiltered = (filteredPokemons: PokemonDetails[]): SetPokemonsFilteredAction => {
    return {
        type: SET_POKEMONS_FILTERED,
        payload: {
            pokemonsFiltered: filteredPokemons,
        },
    };
};
