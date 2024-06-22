import { expect } from "chai";
import hre from "hardhat";
import { loadFixture, time } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("Lock", function() {
    //call fixture with loadFixture(deployOneYearFixture)
    async function deployOneYearFixture() {
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const ONE_GWEI = 1_000_000_000;
    
        const lockedAmount = ONE_GWEI;
        const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
    
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await hre.ethers.getSigners();
    
        const Lock = await hre.ethers.getContractFactory("Lock");
        const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
    
        return { lock, unlockTime, lockedAmount, owner, otherAccount };
      }
    it("Should set the right unlockTime", async function () {
        const { lock, unlockTime } = await loadFixture(deployOneYearFixture);
        expect(await lock.unlockTime()).to.equal(unlockTime);
    });
    it("Should revert with the right error if called to soon", async function () {
        const { lock } = await loadFixture(deployOneYearFixture);
        //expect transaction to revert (fail require())
        await expect(lock.withdraw()).to.be.revertedWith(
            "You can't withdraw yet"
        );
    });
    it("Should transfer the funds to the owner", async function () {
        const { lock, unlockTime } = await loadFixture(deployOneYearFixture);
        //mine new block with timestamp
        await time.increaseTo(unlockTime);
        // Will throw if tx revert
        await lock.withdraw();
    });
    it("Should revert with the right error if called from another account", async function () {
        const { lock, unlockTime, otherAccount } = await loadFixture(deployOneYearFixture);
        await time.increaseTo(unlockTime);
        // We use lock.connect() to send a transaction from another account
        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
            "You aren't the owner"
        );
    });
});