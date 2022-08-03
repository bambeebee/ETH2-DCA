const DCAETH2 = artifacts.require("./DCAETH2.sol");

contract("DCAETH2", accounts => {
  it("...should store the value 89.", async () => {
    const DCAETH2Instance = await DCAETH2.deployed();

    // Set value of 89
    await DCAETH2Instance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await DCAETH2Instance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
