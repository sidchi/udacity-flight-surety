var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "stock scout wrist grid poem danger age rubber siege bring strong audit";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 6721000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};