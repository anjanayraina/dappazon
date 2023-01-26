import { ethers } from 'ethers';

const Navigation = ({ account, setAccount }) => {

    return (
        <nav>
            <div className = "nav__brand">
                <h1>Dappazon</h1>
            </div>
            <input type = "text" className = "nav__search"/>

            <button type = "button" className='nav__connect'>{account.slice(0,5) + '...' + account.slice(38,42 )}</button>
        </nav>
    );
}

export default Navigation;