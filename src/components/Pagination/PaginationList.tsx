import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import Pagination from '@material-ui/lab/Pagination';
import { getPokemons } from '../../api/pokemons';
import { setPokemons } from '../../store/actions/pokemonsList.actions';

export const PaginationList = (): ReactElement => {
    const pokemonsContent = useSelector((state: AppState) => state.pokemonsList.pokemonsContent);
    const pokemonsDetail = useSelector((state: AppState) => state.pokemonsList.pokemonsDetail);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const handleChange = async (event: any, value: number): Promise<void> => {
        const urlBase = 'https://pokeapi.co/api/v2/pokemon?';
        const limit = 20;
        const offset = limit * (value - 1);
        const url = urlBase + `offset=${offset}` + `&limit=${limit}`;
        const pokemons = await getPokemons(url);
        dispatch(setPokemons(pokemons));
        setPage(value);
    };

    return (
        !!pokemonsDetail && (
            <Pagination page={page} count={Math.ceil(pokemonsContent.count / 20)} onChange={handleChange} />
        )
    );
};
