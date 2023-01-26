import { ethers } from 'ethers';


function onClickHandler(){

}
const Navigation = ({ account, setAccount }) => {

    return (
        <nav>
            <div className = "nav__brand">
                <h1>Dappazon</h1>
            </div>
            <input type = "text" className = "nav__search"/>
            {
               account ? 
                    (<button type = "button" className='nav__connect'>{account.slice(0,5) + '...' + account.slice(38,42 )}</button>)
                : (
                    <button type = "button" className='nav__connect' onClick= {onClickHandler}>Connect Metamask</button>
                )
            }
            
            <ul className='nav__links'>
                <li><a href = "#Clothing">Clothing</a></li>
                <li><a href = "#Jewelry">Jewelry</a></li>
                <li><a href = "#Electronics">Electronics</a></li>
                <li><a href = "#Gaming">Gaming</a></li>
                <li><a href = "#Gaming">Toys</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;