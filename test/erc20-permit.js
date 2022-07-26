const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20Permit", function () {
  it("ERC20 permit", async function () {

    const accounts = await ethers.getSigners(1);
    const signers = accounts(0);
    // console.log("Signers object:", owner);

    const Token = await ethers.getContractFactory("permitToken");

    const token = await Token.deploy();
    await token.deployed();

    // const ownerBalance = await token.balanceOf(owner.address);
    // console.log("Owner Address:", owner.address);
    // expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});