require('@babel/register');
var HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const mnemonic = "panic despair peace stadium merge mad honey pulse forum jelly endless kiwi";

module.exports = {
  compilers: {
    solc: {
      version: '0.5.7',
      settings: {
        optimizer: {
          enabled: true,
          runs: 500,
        },
        evmVersion: 'constantinople',
      },
    },
  },
  networks: {
    development: {
      host: '127.0.0.1',
      network_id: '*',
      port: 8545,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/0413092603fe4115b13fb51fdae410a0")
      },
      network_id: 3,
      gas: 6612388,
      skipDryRun: true
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/0413092603fe4115b13fb51fdae410a0")
      },
      network_id: 5,
      gas: 6612388,
      skipDryRun: true
    }
  },
    plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'SES74FF938WEX8XG8UIU5KRBVHKU43UWZ8'
  },
};
