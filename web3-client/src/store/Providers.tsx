'use client';

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoriteCoins } from "./coins/coins";
import { Connectwallet } from "@/components/connectwallet/Connectwallet";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props ) => {

    useEffect(() => {
        const favorites = JSON.parse( localStorage.getItem('favorite-coins') ?? '{}');
        store.dispatch( setFavoriteCoins(favorites));
    }, []);

    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}
