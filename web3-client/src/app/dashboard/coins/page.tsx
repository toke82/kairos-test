import { CoinGrid, CoinsResponse, SimpleCoin } from "@/coins";


const getCoins = async():Promise<SimpleCoin> => {
  const data:CoinsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    .then( res => res.json() );

  return data;
}


export default async function CoinsPage() {

  const coins = await getCoins();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"> <small className="text-blue-500"></small></span>
      {/* { JSON.stringify(coins) } */}

      <CoinGrid coins={ coins } />
    </div>
  )
}