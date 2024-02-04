'use client';

import Link from "next/link";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store";
import { SimpleCoin } from "../interfaces/simple-coin"
import { toggleFavorite } from "@/store/coins/coins";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

interface Props {
    coin: SimpleCoin;
}

export const CoinRow = ({ coin }: Props) => {

    const { id, name } = coin;
    const isFavorite = useAppSelector( state => !!state.coins.favorites[id] );
    const dispatch = useAppDispatch();

    const onToggle = () => {
      dispatch( toggleFavorite(coin) );

    }
    return (
      <tr key={coin.id} className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-">
        <td className="py-4 flex items-center uppercase">
        <div onClick={ onToggle }
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >
              <div className="text-red-600">
                {
                  isFavorite
                    ? (<IoStarSharp />)
                    : (<IoStarOutline />)
                }

              </div>
          </div>
          <Image
            src={coin.image}
            width={30}
            height={30}
            alt={coin.name} 
            className="w-[1.2rem] h-[1.2rem] mx-1.5" />
          <span>
            <Link href={''} className="cursor-pointer">{coin.symbol}</Link>
          </span>
        </td>
        <td className="py-4">
          <Link href={''} className="cursor-pointer" >{coin.name  }</Link>
        </td>
        <td className="py-4">
          {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "USD",
          }).format(coin.current_price)}
        </td>
        <td className="py-4">{coin.total_volume}</td>
        <td className="py-4">{coin.market_cap_change_percentage_24h}%</td>
    </tr>      
    )
}
