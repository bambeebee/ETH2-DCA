const MockV3Aggregator = artifacts.require('MockV3Aggregator')

module.exports = async function(deployer) {
    await deployer.deploy(MockV3Aggregator, 18, 100000);

    // polygon mainnet eth/usd price feed address
    const mockV3Aggregator = await MockV3Aggregator.deployed()

    console.log(mockV3Aggregator.latestRoundData())
  };
  