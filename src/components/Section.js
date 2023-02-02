import { ethers } from 'ethers'

// Components
import Rating from './Rating'

const Section = ({ title, items, togglePop }) => {
    return (
        <div className='cards__section'>
            <h3 id = {title}>{title}</h3>
            <hr/>
            <div className ='cards'>
                {items.map((item ,index) => (
                    <h4>{item.name}</h4>
                ))}
            </div>
        </div>
    );
}

export default Section;