'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { useState } from 'react';
import { ethers } from "ethers";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { connectWallet_1 } from "@/store/account/account";




export const Connectwallet = () => {

  
  const user = useAppSelector( state => state.account.address );
  const dispatch = useAppDispatch();

  /* web3Modal configuration for enabling wallet access */
  const getWeb3Modal = async() => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "your-infura-id"
          }
        }
      }
    })
    return web3Modal;
  }


  const connectWallet = async() => {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const accounts = await provider.listAccounts();
      dispatch( connectWallet_1(accounts[0]));
      localStorage.setItem('isWalletConnected', 'true');
    } catch (error) {
      console.log('error:', error);
    }
  }

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      { !user ? (
        <button onClick={connectWallet} type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          connectwallet
        </button>
      ) : (
        <p>{user.address}</p>
      ) }
    </div>
  )
}

