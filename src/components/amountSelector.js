import {useState} from 'react';
import './amountSelector.scss'

export const  AmountSelector = () => {
    const [showCustomeInput, setCustomeInput] = useState()
    const [active, showActive] = useState(false)
    const amountList = ['Custom', 50, 100, 200, 250]

    const handleClick = (index) => {
        showActive(true)
        index === 0 ? 
            setCustomeInput(true): setCustomeInput(false)

    }

    const customAmount = (
        <div className='input-border'>
            <input className='input-amount' placeholder="Enter custome amount here ..."/>
        </div>  
    )

    const buttonList = amountList.map( (element, index) => {
        return (
            <button 
                type="radio"  
                className={ active ? 'btn-active' : 'btn-not-active'}  
                key={`${element}`} 
                onClick={() => handleClick(index)}>
                    {element}
            </button>
    )})

    return (
      <div className="amount-container">
        <div className='amount-selector-header'>
            {buttonList}
        </div>
        <div className='custom-amount'>
            {showCustomeInput && customAmount}
        </div>
      </div>
    );
}