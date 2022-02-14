import { PokemonsData } from '../models/pokemons';

export const urlList = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (urlDetail?: string): Promise<PokemonsData> => {
    const URL: string = urlDetail ? urlDetail : urlList;
    return await fetch(URL)
        .then((response) => {
            return response.json() as Promise<PokemonsData>;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(error);
            throw error;
        });
};
