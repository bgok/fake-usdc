require("@nomiclabs/hardhat-waffle");
const {TBSC_PRIVATE_KEY, TBSC_GAS_PRICE, TBSC_URL} = require("./constants.js");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    tbsc: {
      url: TBSC_URL,
      gasPrice: TBSC_GAS_PRICE,
      accounts: [TBSC_PRIVATE_KEY],
    },
  }
};
