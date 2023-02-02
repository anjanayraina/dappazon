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
  const [contractInstance , setContractInstance] = useState(null);
  const [electronics , setElectronics] = useState(null);
  const [clothing , setClothing] = useState(null);
  const [toys , setToys] = useState(null);
  const togglePop = ()=>{

  }
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
    const contractInstance = new ethers.Contract("0x9421facBD9CaA0fa55bA0564B680C50883696db7", Dappazon , tempProvider);
    setContractInstance(contractInstance);

    const allItems = [];
    for(var i=0; ;i++){
      const item =await contractInstance.items(i);
      if(item.name == ""){
        break;
      }
      allItems.push(item);
    }


    const electronics= allItems.filter((item)=>item.cateogry === "Electronics");
    setElectronics(electronics);
    console.log(electronics);
    
    const clothing= allItems.filter((item)=>item.cateogry === "Clothing");
    setClothing(clothing);
    console.log(clothing);
    const toys = allItems.filter((item)=>item.cateogry === "Toys");
    setToys(toys);
    console.log(toys);
    
  }
  useEffect(() => {
    loadAccount()
    loadData()
  } , [])

  return (
    <div>
      <Navigation  account = {account} setAccount = {setAccount}/>
      <h2>All Dappazon Products</h2>

        <Section title = {"Clothing"} items = {clothing} togglePop = {togglePop}/>
 
    </div>
  );
}

export default App;
