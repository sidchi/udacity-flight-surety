var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "surface harvest cupboard brass roof agent cause picture pepper enhance team poet";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};