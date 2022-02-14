import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './api/pokemons';
import { HomePage } from './pages/HomePage/HomePage';
import { setPokemons } from './store/actions/pokemonsList.actions';

function App(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        (async (): Promise<void> => {
            const pokemons = await getPokemons();
            dispatch(setPokemons(pokemons));
        })();
    }, [dispatch]);

    return (
        <div className="App">
            <HomePage />
        </div>
    );
}

export default App;
