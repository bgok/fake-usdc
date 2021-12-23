const { expect } = require("chai");

describe("Token contract", function () {
    let owner, Token, hardhatToken;

    before(async () => {
        [owner] = await ethers.getSigners();

        Token = await ethers.getContractFactory("Token");

        hardhatToken = await Token.deploy(1000000);
    })

    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })

    it("has 18 decimals", async function () {
        expect(await await hardhatToken.decimals()).to.equal(18);
    })
});