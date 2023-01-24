const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  it('Correct Name!!' , async ()=>{
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon  = await Dappazon.deploy()
    const name = await dappazon.name()
    expect(name).to.equal("Dappazon")
  })
})
