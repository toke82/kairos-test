import { CoinGrid, CoinsResponse, SimpleCoin } from "@/coins";



const getCoins = async():Promise<SimpleCoin> => {
  const data:CoinsResponse = await fetch(`http://localhost:4000/api/tokens/price`)
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