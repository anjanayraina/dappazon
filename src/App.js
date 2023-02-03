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
  const [item , setItem] = useState(null);
  const [toggle , setToggle] = useState(null);
  const [isLoading , setLoading] = useState(true);
  const togglePop = (item)=>{
    setItem(item)
    toggle ? setToggle(false) : setToggle(true);
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
    const contractInstance = new ethers.Contract("0x221545Fec5605110B9F67122E9976237360037D9", Dappazon , tempProvider);
    setContractInstance(contractInstance);

    const allItems = [];
    for(var i=0; ;i++){
      const item =await contractInstance.items(i);
      if(item.name == ""){
        break;
      }
      allItems.push(item);
      setLoading(false);
    }


    const electronics= allItems.filter((item)=>(item.cateogry === "Electronics" && item.status != 2) );
    setElectronics(electronics);
    console.log(electronics);
    
    const clothing= allItems.filter((item)=>(item.cateogry === "Clothing" && item.status != 2));
    setClothing(clothing);
    console.log(clothing);
    const toys = allItems.filter((item)=>(item.cateogry === "Toys" && item.status != 2));
    setToys(toys);
    console.log(toys);
    
  }
  useEffect(() => {
    console.log(account);
    loadAccount()
    loadData()
  } , [])

  return (
    <div>
      <Navigation  account = {account} setAccount = {setAccount}/>
      <h2>All Dappazon Products</h2>

        <Section title = {"Clothing"} items = {clothing} togglePop = {togglePop} loading = {isLoading}/>
        <Section title = {"Electronics"} items = {electronics} togglePop = {togglePop} loading = {isLoading}/>
        <Section title = {"Toys"} items = {toys} togglePop = {togglePop} loading = {isLoading}/>

        {toggle && (
          <Product item = {item} provider = {provider} account = {account} dappazon = {contractInstance} togglePop = {togglePop}/>
        )}
    </div>
  );
}

export default App;