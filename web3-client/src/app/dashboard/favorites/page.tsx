import { FavoriteCoins, CoinGrid, CoinsResponse, SimpleCoin } from "@/coins";
import { IoHeartOutline } from "react-icons/io5";

export const metadata = {
  title: 'Favoritos',
  description: 'lorem ipsum'
}



export default async function PokemonPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2"><small className="text-blue-500"></small></span>
      <FavoriteCoins />
    </div>
  );
}