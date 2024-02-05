import { SimpleCoin } from "../interfaces/simple-coin";
import { CoinRow } from "./CoinRow";
import { IoLogoBitcoin } from "react-icons/io5";


interface Props {
    coins: SimpleCoin[];
}

export const CoinGrid = ({ coins }: Props) => {

  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        { coins ? (
          <table className="w-full table-auto">
          <thead
                className="capitalize text-base text-gray-100 
              font-medium border-b border-gray-100
              "
              >
                <tr>
                  <th className="py-1">asset</th>
                  <th className="py-1">name</th>
                  <th className="py-1">price</th>
                  <th className="py-1">total volume</th>
                  <th className="py-1">market cap change</th>
                </tr>
          </thead>
          <tbody>
          {coins.map((coin) => {return (
            <CoinRow key={ coin.id } coin={coin}/>
            );
          })}
          </tbody>
          </table>
        ): (<NoCryptoCurrencies />) }

      </div>
    </>
  )
}

export const NoCryptoCurrencies = () => {
  return(
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoLogoBitcoin size={100} className="text-red-500" />
      <span>No hay cryptomonedas</span>
    </div>
  )
}
