// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract CryptoFavorites {
    struct FavoritesList {
        string[] favoriteCryptos;
    }

    mapping(address => FavoritesList) private userFavorites;

    event CryptoAdded(address indexed user, string indexed cryptoId);
    event CryptoRemoved(address indexed user, string indexed cryptoId);

    modifier hasFavorites() {
        require(userFavorites[msg.sender].favoriteCryptos.length > 0, "No favorites found for the user");
        _;
    }

    function addCryptoToFavorites(string memory cryptoId) public {
        require(bytes(cryptoId).length > 0, "CryptoId cannot be empty");
        require(!isCryptoInFavorites(msg.sender, cryptoId), "Crypto already added to favorites");

        userFavorites[msg.sender].favoriteCryptos.push(cryptoId);

        emit CryptoAdded(msg.sender, cryptoId);
    }

    function removeCryptoFromFavorites(string memory cryptoId) public {
        require(userFavorites[msg.sender].favoriteCryptos.length > 0, "No favorites found for the user");
        require(isCryptoInFavorites(msg.sender, cryptoId), "Crypto not found in favorites");

        uint indexToDelete = getIndexToDelete(msg.sender, cryptoId);

        if (indexToDelete < userFavorites[msg.sender].favoriteCryptos.length - 1) {
            userFavorites[msg.sender].favoriteCryptos[indexToDelete] = userFavorites[msg.sender].favoriteCryptos[userFavorites[msg.sender].favoriteCryptos.length - 1];
        }

        userFavorites[msg.sender].favoriteCryptos.pop();

        emit CryptoRemoved(msg.sender, cryptoId);
    }

    function getFavoritesList() public view hasFavorites returns (string[] memory) {
        return userFavorites[msg.sender].favoriteCryptos;
    }

    function isCryptoInFavorites(address user, string memory cryptoId) public view returns (bool) {
        for (uint i = 0; i < userFavorites[user].favoriteCryptos.length; i++) {
            if (keccak256(abi.encodePacked(userFavorites[user].favoriteCryptos[i])) == keccak256(abi.encodePacked(cryptoId))) {
                return true;
            }
        }
        return false;
    }

    function getIndexToDelete(address user, string memory cryptoId) private view returns (uint) {
        for (uint i = 0; i < userFavorites[user].favoriteCryptos.length; i++) {
            if (keccak256(abi.encodePacked(userFavorites[user].favoriteCryptos[i])) == keccak256(abi.encodePacked(cryptoId))) {
                return i;
            }
        }
        revert("Crypto not found in favorites");
    }
}