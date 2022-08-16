const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock DAI Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // Deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()

  // Deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // Transfer all tokens to TokenFarm (1 million)
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
<<<<<<< HEAD

  // Transfer 100 Mock DAI tokens to investor
  await daiToken.transfer(accounts[1], '100000000000000000000')
=======
  
  // Transfer 100 Mock DAI tokens to investor
  await daiToken.transfer(accounts[0], '100000000000000000000')
  await daiToken.approve(tokenFarm.address, 1)
  await dappToken.approve(tokenFarm.address, 1)
  await tokenFarm.stakeTokens(1, {"from" : accounts[0]})
>>>>>>> 9f0d39d1f5e683aa4a4b61065c8f40f5d3364679
}
