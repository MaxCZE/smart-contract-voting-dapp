require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20", // Version du compilateur Solidity
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337, // Chain ID du réseau local Ethereum
      accounts: {
        accountsIndex: 0, // Indice du premier compte à utiliser
        count: 20, // Nombre total de comptes à dériver à partir de l'indice spécifié
        initialIndex: 0, // Indice initial pour la dérivation des comptes
      }
    }
  },
};
