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

  // Transfer 100 Mock DAI tokens to investor
  await daiToken.transfer(accounts[0], '100000000000000000000')
  await daiToken.approve(tokenFarm.address, 1)
  await dappToken.approve(tokenFarm.address, 1)
  await tokenFarm.stakeTokens(1, {"from" : accounts[0]})

  // await tokenFarm.setPriceFeedContract(
  //   "0xa36085F69e2889c224210F603D836748e7dC0088",
  //   "0x3Af8C569ab77af5230596Acf0E8c2F9351d24C38"
  // );

  // await tokenFarm.setPriceFeedContract(
  //   dappToken.address,
  //   0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
  // );

  // // FAU Token address. Pretending FAU is DAI
  // await tokenFarm.setPriceFeedContract(
  //   "0xFab46E002BbF0b4509813474841E0716E6730136",
  //   "0x777A68032a88E5A84678A77Af2CD65A7b3c0775a"
  // );
    
  // await tokenFarm.getTokenEthPrice(dappToken.address);
}
