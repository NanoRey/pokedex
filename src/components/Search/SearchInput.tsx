import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import { useStyles } from './SearchInput.styles';
import { setPokemonsDetail, SetPokemonsFiltered } from '../../store/actions/pokemonsList.actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';

export default function SearchInput(): ReactElement {
    const dispatch = useDispatch();
    const classes = useStyles();
    const pokemonsDetail = useSelector((state: AppState) => state.pokemonsList.pokemonsDetail);
    const filterPokemons = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const elementSearched = e.target.value;
        const filteredPokemons = pokemonsDetail.filter((pokemon) => pokemon.name.includes(elementSearched) === true);
        // const getFilteredPokemons=filteresPokemons.map((pokemon)=>pokemon)
        // Hago dispatch del resultado de filteredPokemons, por lo tanto el estado qeu suo para filtrar ha sido modificado y al borrar el filter se
        // aplica sobre el nuevo estado. Una movida.
        dispatch(SetPokemonsFiltered(filteredPokemons));
    };

    return (
        <div className={classes.margin}>
            <div>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => filterPokemons(e)}
                    id="input-with-icon-grid"
                    label="Busca tu pokemon"
                />
                <Search />
            </div>
        </div>
    );
}
