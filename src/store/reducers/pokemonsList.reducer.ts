import { PokemonDetailData, PokemonsData } from '../../models/pokemons';
import { PokemonDetails } from '../../models/pokemonsDetail';
import {
    ActionsType,
    SET_POKEMONS_CONTENT,
    SET_POKEMONS_FILTERED,
    SET_POKEMON_DETAIL,
} from '../actions/pokemonsList.actions';

export interface PokemonsState {
    isLoading: boolean;
    pokemonsContent: PokemonsData;
    pokemonsDetail: Array<PokemonDetails>;
    pokemonsFiltered: Array<PokemonDetails>;
}

const initialState: PokemonsState = {
    isLoading: false,
    pokemonsContent: null,
    pokemonsDetail: null,
    pokemonsFiltered: null,
};

const mock: PokemonDetailData = {
    id: 1,
    name: 'hola',
    image: 'string',
    type: [{ name: 'hola', url: 'vf' }],
    url: 'hola',
};

const pokemonsReducer = (state: PokemonsState = initialState, action: ActionsType): PokemonsState => {
    switch (action.type) {
        case SET_POKEMONS_CONTENT:
            return {
                ...state,
                pokemonsContent: action.payload.pokemonsContent,
            };
        case SET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonsDetail: action.payload.pokemonDetail,
            };
        case SET_POKEMONS_FILTERED:
            return {
                ...state,
                pokemonsFiltered: action.payload.pokemonsFiltered,
            };
        default:
            return state;
    }
};

export default pokemonsReducer;
