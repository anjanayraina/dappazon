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
  const loadData = async () =>{
    const  accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
    console.log(account);


  }
  useEffect(() => {
    loadData()
  } , [])

  return (
    <div>
      <Navigation  account = {account} setAccount = {setAccount}/>
     
      {/* <p>{account}</p> */}

    </div>
  );
}

export default App;
