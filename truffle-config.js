require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeyTest = "<private key>"; // Add your private key here

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    testnet: {
      provider: () => {
        return new HDWalletProvider({
          providerOrUrl: "https://api.s0.b.hmny.io",
          privateKeys: [privateKeyTest],
        });
      },
      network_id: 1666700000,
      gas: 20000000,
      gasPrice: 10000000000,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
