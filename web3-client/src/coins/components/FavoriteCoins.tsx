'use client';

import { useAppSelector } from "@/store";
import { CoinGrid } from "./CoinGrid";
import { IoStarOutline } from "react-icons/io5";

export const FavoriteCoins = () => {

  const favoriteCoins = useAppSelector( state => Object.values( state.coins.favorites) );

  return (
    <>
      {
        favoriteCoins.length === 0
          ? (<NoFavorites />)
          : (<CoinGrid coins={ favoriteCoins }/>)
        }
          
    </>
    
  )
}

export const NoFavorites = () => {
    return(
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoStarOutline size={100} className="text-red-500" />
        <span>No hay favoritos</span>
      </div>
    )
  }
