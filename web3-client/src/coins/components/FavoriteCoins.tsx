'use client';

import { useAppSelector } from "@/store";
import { CoinGrid } from "./CoinGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline, IoStarOutline } from "react-icons/io5";
import coins from '@/store/coins/coins';

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
