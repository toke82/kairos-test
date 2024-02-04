// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract CryptoFavorites {
    // Estructura para representar la lista de criptomonedas favoritas de un usuario
    struct FavoritesList {
        mapping (string => bool) isFavorite; // Mapeo para almacenar si una criptomoneda es favorita
        string[] favoriteCryptos; // Lista de criptomonedas favoritas
    }

    // Mapeo para almacenar la lista de favoritos de cada usuario
    mapping (address => FavoritesList) private userFavorites;

    // Eventos para notificar cambios en la lista de favoritos
    event CryptoAdded(address indexed user, string cryptoId);
    event CryptoRemoved(address indexed user, string cryptoId);

    // Función para añadir una criptomoneda a la lista de favoritos del usuario
    function addCryptoToFavorites(string memory cryptoId) public {
        require(!userFavorites[msg.sender].isFavorite[cryptoId], "Crypto already added to favorites");
        
        userFavorites[msg.sender].isFavorite[cryptoId] = true;
        userFavorites[msg.sender].favoriteCryptos.push(cryptoId);

        emit CryptoAdded(msg.sender, cryptoId);
    }

    // Función para eliminar una criptomoneda de la lista de favoritos del usuario
    function removeCryptoFromFavorites(string memory  cryptoId) public {
        require(userFavorites[msg.sender].isFavorite[cryptoId], "Crypto not found in favorites");

        // Eliminar la criptomoneda de la lista
        for (uint i = 0; i < userFavorites[msg.sender].favoriteCryptos.length; i++) {
            if (keccak256(abi.encodePacked(userFavorites[msg.sender].favoriteCryptos[i])) == keccak256(abi.encodePacked(cryptoId))) {
                userFavorites[msg.sender].favoriteCryptos[i] = userFavorites[msg.sender].favoriteCryptos[userFavorites[msg.sender].favoriteCryptos.length - 1];
                userFavorites[msg.sender].favoriteCryptos.pop();
                break;
            }
        }

        // Actualizar el mapeo de favoritos
        userFavorites[msg.sender].isFavorite[cryptoId] = false;

        emit CryptoRemoved(msg.sender, cryptoId);
    }

    // Función para obtener la lista de criptomonedas favoritas de un usuario
    function getFavoritesList() public view returns (string[] memory) {
        return userFavorites[msg.sender].favoriteCryptos;
    }
}
