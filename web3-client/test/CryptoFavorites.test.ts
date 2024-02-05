// test.ts

import { expect } from 'chai';
import { ethers } from 'hardhat';
import { CryptoFavorites } from '../typechain-types/CryptoFavorites';

describe('CryptoFavorites Contract', () => {
  let cryptoFavorites: CryptoFavorites;

  beforeEach(async () => {
    // Deploy the contract
    const CryptoFavoritesFactory = await ethers.getContractFactory('CryptoFavorites');
    cryptoFavorites = (await CryptoFavoritesFactory.deploy()) as CryptoFavorites;
    await cryptoFavorites.waitForDeployment();
  });

  it('should add crypto to favorites', async () => {
    const cryptoId = 'BTC';
    await cryptoFavorites.addCryptoToFavorites(cryptoId);

    const favoritesList = await cryptoFavorites.getFavoritesList();
    expect(favoritesList).to.include(cryptoId);
  });

  it('should remove crypto from favorites', async () => {
    const cryptoId = 'ETH';
    await cryptoFavorites.addCryptoToFavorites(cryptoId);

    await cryptoFavorites.removeCryptoFromFavorites(cryptoId);

    const favoritesList = await cryptoFavorites.getFavoritesList();
    expect(favoritesList).to.not.include(cryptoId);
  });

  it('should get favorites list', async () => {
    const cryptoId1 = 'LINK';
    const cryptoId2 = 'ADA';

    await cryptoFavorites.addCryptoToFavorites(cryptoId1);
    await cryptoFavorites.addCryptoToFavorites(cryptoId2);

    const favoritesList = await cryptoFavorites.getFavoritesList();
    expect(favoritesList).to.have.lengthOf(2);
    expect(favoritesList).to.include(cryptoId1);
    expect(favoritesList).to.include(cryptoId2);
  });

  it('should not add duplicate crypto to favorites', async () => {
    const cryptoId = 'XRP';

    await cryptoFavorites.addCryptoToFavorites(cryptoId);

    // Attempt to add the same crypto again
    await expect(cryptoFavorites.addCryptoToFavorites(cryptoId)).to.be.revertedWith(
      'Crypto already added to favorites'
    );
  });

  it('should not remove non-existing crypto from favorites', async () => {
    const cryptoId = 'DOT';

    // Attempt to remove a crypto that hasn't been added
    await expect(cryptoFavorites.removeCryptoFromFavorites(cryptoId)).to.be.revertedWith(
      'Crypto not found in favorites'
    );
  });
});
