import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsList.reducer';

const rootReducer = combineReducers({
    pokemonsList: pokemonsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
