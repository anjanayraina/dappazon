import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Section from './components/Section'
import Product from './components/Product'

// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

function App() {
  const [account , setAccount] = useState(null);
  const [provider , setProvider]= useState(null);

  const loadAccount = async () =>{

    setAccount("Connecting..")
    const  accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);

  }

  const loadData = async () =>{
    const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);
    const network = await tempProvider.getNetwork();
    console.log(network);
    // const contractInstance = new ethers.Contract("", abi)
  }
  useEffect(() => {
    loadAccount()
  } , [])

  return (
    <div>
      <Navigation  account = {account} setAccount = {setAccount}/>

    </div>
  );
}

export default App;
