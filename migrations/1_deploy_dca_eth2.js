const DCAETH2 = artifacts.require("DCAETH2");

module.exports = async function (deployer, networks, accounts) {
  const web3 = require('web3');
  await deployer.deploy(DCAETH2, 1000, "test token name", 1, "TEST", { "from": accounts[0] });
  const DCAETH2Instance = await DCAETH2.deployed();

  // Set value of 89
  await DCAETH2Instance.transfer(accounts[1], '3');

  // // Get stored value
  const storedData = await DCAETH2Instance.balanceOf(accounts[0]);
  console.log(storedData);
};
