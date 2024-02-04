import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AccountState {
    address: any;
}

const initialState: AccountState = {
    address: '',
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        connectWallet_1( state, action: PayloadAction<any>) {
            state.address = action.payload;
        }
    }
});

export const { connectWallet_1 } = accountSlice.actions;

export default accountSlice.reducer;