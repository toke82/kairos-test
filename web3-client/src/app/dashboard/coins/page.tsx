import { CoinGrid, CoinsResponse, SimpleCoin } from "@/coins";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const API_URL = process.env.API_URL;

const getCoins = async():Promise<SimpleCoin[]> => {
  const data:CoinsResponse[] = await fetch(`${API_URL}/tokens/price`, { next: { revalidate: 60 } })
    .then( res => res.json() );
  return data;
}


export default async function CoinsPage() {

  const coins = await getCoins();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"> <small className="text-blue-500"></small></span>

      <CoinGrid coins={ coins } />
    </div>
  )
}