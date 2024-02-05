import { ethers } from "hardhat";

async function main() {

  /*
  A ContractFactory in ether.js is an abstraction used to deploy new smart contracts,
  so CryptoFavoritesContract here is a factory for instance our CryptoFavorites contract. 
  */
  const CryptoFavoritesFactory = await ethers.getContractFactory('CryptoFavorites');

  // here deploy the contract
  const CryptoFavorites = await CryptoFavoritesFactory.deploy();

  // Wait for it to finish the deployment
  await CryptoFavorites.waitForDeployment();

  const address = await CryptoFavorites.getAddress();

  console.log('Contract displayed at the address:', address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
