import React from 'react'

function CustomBox({

  // THESE ARE THE PROPS WE ARE PASSING ON
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyArr = [],
  selectedCurrency = "usd",
  disableAmount = false,
  disableCurrency = false,
}) {
  return (
    <>
    
        <div className='h-28 w-[36rem] bg-blue-400 rounded-lg flex flex-col justify-center' >

          <div className='flex flex-row justify-between my-2 ' >
                <label className='text-black font-bold ml-6 ' > {label} </label>
                <p className='text-black font-bold mr-4 ' >Currency Type</p>
          </div>

          <div className='flex flex-row justify-center my-2 ' >
            <input type="number" className='h-8 w-[24rem] mr-10 rounded-lg text-black font-bold p-2 ' disabled={disableAmount} value={amount} onChange={ (e) => onAmountChange && onAmountChange( Number(e.target.value)) } />
            {/* ON AMOUNT CHANGE IS THE FUNCTION THAT HANDLES THE INPUT FIELD WHENEVER AMOUNT IS CHANGED */}

            <select className='ml-12 rounded-lg text-black ' value={selectedCurrency} onChange = { (e) => onCurrencyChange && onCurrencyChange( (e.target.value)) } disabled={disableCurrency} >
              {/* ON CURRENCY CHANGE IS SIMILAR TO ON AMOUNT CHANGE */}

              {/* LOOPING THROUGH THE CURRENCY ARRAY TO DISPLAY ALL THE CURRENCY IN OPTIONS FIELD */}
              { currencyArr.map( (currency) => (
                <option key={currency} value={currency}>{currency}</option>
              )) }

            </select>
          </div>

          

        </div>
    
    </>
  )
}

export default CustomBox
