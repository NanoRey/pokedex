import React, { ReactElement } from 'react';
import { PokemonLogo } from '../../components/PokemonLogo/PokemonLogo';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList';
import './HomePage.styles.ts';
import logo from '../../images/pokemon-logo.svg';
import { useStyles } from './HomePage.styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import SearchInput from '../../components/Search/SearchInput';
import { PaginationList } from '../../components/Pagination/PaginationList';

export const HomePage = (): ReactElement => {
    const classes = useStyles();
    const pokemonsContent = useSelector((state: AppState) => state.pokemonsList.pokemonsContent);
    return !!pokemonsContent ? (
        <div className={classes.gridContainer}>
            <div>
                <PokemonLogo logo={logo} />
                <SearchInput />
            </div>
            <div>
                <PokemonsList />
            </div>
            <div>
                <PaginationList />
            </div>
        </div>
    ) : (
        <p>Nothing</p>
    );
};
