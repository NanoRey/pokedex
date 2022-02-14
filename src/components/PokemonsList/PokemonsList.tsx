import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { useStyles } from './PokemonsList.styles';
import { getPokemons } from '../../api/pokemons';
import { setPokemonsDetail, SetPokemonsFiltered } from '../../store/actions/pokemonsList.actions';
import { PokemonDetails } from '../../models/pokemonsDetail';
import { MediaCard } from '../Card/Card';

export const PokemonsList = (): ReactElement => {
    const dispatch = useDispatch();
    const pokemonsContent = useSelector((state: AppState) => state.pokemonsList.pokemonsContent);
    const pokemonsDetail = useSelector((state: AppState) => state.pokemonsList.pokemonsDetail);
    const pokemonsFiltered = useSelector((state: AppState) => state.pokemonsList.pokemonsFiltered);
    const classes = useStyles();

    const getTypeArray = (types: Array<any>): Array<any> => {
        const result = types.map((type) => {
            return { name: type.type.name, url: type.type.url };
        });
        return result;
    };

    const getPokemonDetailEstructure = useCallback((data, url): PokemonDetails => {
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            type: getTypeArray(data.types),
            url,
        };
    }, []);

    const getPokemonDetail = useCallback(async (): Promise<any> => {
        return Promise.all(
            pokemonsContent?.results.map(async (pokemon) => {
                const result = await getPokemons(pokemon.url);
                return getPokemonDetailEstructure(result, pokemon.url);
            }),
        );
    }, [getPokemonDetailEstructure, pokemonsContent]);

    const getPokemonList = useCallback(async () => {
        const structureData: Array<PokemonDetails> = await getPokemonDetail();
        dispatch(setPokemonsDetail(structureData));
        dispatch(SetPokemonsFiltered(structureData));
    }, [dispatch, getPokemonDetail]);

    useEffect(() => {
        (async (): Promise<void> => {
            await getPokemonList();
        })();
    }, [getPokemonList, dispatch]);

    return pokemonsFiltered ? (
        <div>
            <div className={classes.pokemonsListGrid}>
                {pokemonsFiltered.map((pokemon) => (
                    <MediaCard
                        key={`pokemon-${pokemon.name}`}
                        name={pokemon.name}
                        id={pokemon.id}
                        image={pokemon.image}
                        type={pokemon.type.map((value) => value.name)}
                    />
                ))}
            </div>
        </div>
    ) : (
        <p>Cargando...</p>
    );
};
