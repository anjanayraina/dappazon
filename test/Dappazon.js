const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
// before each is a function that is used to declare the contract and deploy it and then also run all the 
  beforeEach(async() => {

    // console.log((await ethers.getSigners()).length)

    // this will send the accconts that are currently running in the test chain 
    // you can also use npx hardhat node to get the addresses that are running on the fake chain

    // console.log(await ethers.getSigners() )
    [deployer , buyer]  = await ethers.getSigners()

    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon  = await Dappazon.deploy()
  })
  it('Correct Name!!' , async ()=>{

    const name = await dappazon.name()
    expect(name).to.equal("Dappazon")
  })

  it("Owner Correct Set" , async()=>{
    const ownerAddress = await dappazon.owner()
    expect(ownerAddress).to.equal(deployer.address)
  })
})
