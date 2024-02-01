import { SimpleCoin } from "@/coins";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface CoinsState {
    favorites: { [key: string]: SimpleCoin},
}

const initialState: CoinsState = {
    favorites: {},
}

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setFavoriteCoins( state, action: PayloadAction<{ [key: string]: SimpleCoin}> ) {
            state.favorites = action.payload;
        },

        toggleFavorite( state, action: PayloadAction<SimpleCoin> ) {

            const coin = action.payload;
            const { id } = coin;

            if ( !!state.favorites[id] ) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = coin;
            }

            localStorage.setItem('favorite-coins', JSON.stringify( state.favorites ));
        }
    }

});

export const { setFavoriteCoins, toggleFavorite } = coinsSlice.actions;

export default coinsSlice.reducer;