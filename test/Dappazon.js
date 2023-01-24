const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
// before each is a function that is used to declare the contract and deploy it and then also run all the 
  beforeEach(async() => {

    console.log(await ethers.getSigners())
   
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon  = await Dappazon.deploy()
  })
  it('Correct Name!!' , async ()=>{

    const name = await dappazon.name()
    expect(name).to.equal("Dappazon")
  })
})
