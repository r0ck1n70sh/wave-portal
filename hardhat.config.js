require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Print the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
  
  for (let account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: "0.8.17",
};