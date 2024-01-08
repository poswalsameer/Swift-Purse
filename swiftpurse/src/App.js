

import './App.css';
import './index.css';
import CustomBox from './Components/CustomBox.js';
import useConverter from './CustomHooks/useConverter';
import { useState } from 'react';

// import useConverter from './CustomHooks/useConverter';

function App() {

  //USE STATE HOOKS TO MANAGE ALL THE STATES AND UI UPDATION FOR LABELS AND AMOUNT AND CURRENCY
  const [amount, setAmount] = useState(0);
  const [convertFrom, setConvertFrom] = useState('usd');
  const [convertTo, setConvertTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  //GETTING THE INFORMATION OF CURRENCY FROM THE CUSTOM HOOK CREATED
  const currentCurrencyInfo = useConverter(convertFrom);

  //GETTING ALL THE OPTIONS BY LOOPING THROUGH THE ARRAY OF OBJECTS FROM SELECTED CURRENCY
  const currencyOptions = Object.keys(currentCurrencyInfo); 

  //THIS FUNCTION DOES THE TASK OF CONVERTING THE CURRENCY
  //IT DOES BY GETTING THE AMOUNT ENTERED BY THE USER AND THEN MULTIPLYING IT
  //BY THE VALUE OF THE CURRENCY CHOSEN IN THE "TO" COLUMN 
  const convertCurrency = () => {
      setConvertedAmount( amount * currencyOptions[convertTo] );
  }

  //FUNCTION FOR THE SWAP BUTTON THAT DOES A SIMPLE TASK OF SWAPPING THE VALUE FROM THE "FROM" to "TO" AND ALSO SWAPS THE VALUE IN THE RESPECTIVE INPUT FIELDS
  const swapInput = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>

        <div className=' flex flex-col justify-center items-center' >

            <h1 className=' m-20 text-8xl text-green-300 font-extrabold' >SWIFT-PURSE</h1>

            <CustomBox 
              label='FROM'
              amount={amount}
              currencyOptions={currencyOptions}
              onCurrencyChange={ (currency) => setConvertFrom(currency) }
              onAmountChange={ (amount) => setAmount(amount) }
              selectedCurrency={convertFrom}
            
            />  

            <button className='h-14 w-36 bg-blue-400 rounded-lg my-10 text-center text-black font-extrabold ' >SWAP</button> 

            <CustomBox />             

        </div>


    </>
  );
}

export default App;
