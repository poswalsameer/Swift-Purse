

import './App.css';
import './index.css';

// import useConverter from './CustomHooks/useConverter';

function App() {

  // const currencyOptions = [];
  
  // let currency = "usd";

  return (
    <>

        <div className=' flex flex-col justify-center items-center' >

            <h1 className=' m-20 text-8xl text-green-300 font-extrabold' >SWIFT-PURSE</h1>

            {/* PARENT DIV CONTAINING BOTH THE DIVS OF INPUT */}
            <div className=' m-10 h-72 w-[40rem] flex flex-col justify-center items-center bg-red-200 rounded-lg' >

              {/* First div box */}
              <div className='m-5 h-24 w-[35rem] bg-blue-600 rounded-lg flex flex-col justify-center  ' >

                  {/* DIV used to align the text over input box */}
                  <div className='flex flex-row justify-between items-center' >

                    <label htmlFor="convertFrom" className='text-2xl font-bold mb-2 ml-8 ' >FROM</label>

                    <p className='text-xl font-bold mb-2 mr-5 ' >Currency Type</p>
 
                  </div>

                  {/* DIV used to align the input box and drop down menu */}
                  <div className='flex flex-row justify-center items-center'>

                    <input type="number" name="convertFrom" className='mx-6 text-black font-bold w-80 border-2 border-orange-700 rounded-lg' />

                    <select name="currencySelect" className='text-black w-16 border-2 border-orange-700 rounded-lg mx-6 mb-[2px] '>

                      {/* {currencyOptions.map( (currency) => (
                        <option key={currency} value={currency} >{currency}</option>
                      ) ) } */}

                    </select>

                  </div>                

              </div>


              {/* SECOND DIV BOX */}
              <div className=' m-5 h-24 w-[35rem] bg-blue-600 rounded-lg flex flex-col justify-center ' >

                {/* DIV USED TO ALIGN THE TEXT OVER INPUT BOX */}
                <div className='flex flex-row justify-between items-center' >

                    <label htmlFor="convertTo" className='text-2xl font-bold mb-2 ml-8 ' >TO</label>

                    <p className='text-xl font-bold mb-2 mr-5 ' >Currency Type</p>


                </div>

                {/* DIV USED TO ALIGN THE INPUT AND DROP DOWN MENU */}
                <div className='flex flex-row justify-center items-center'>

                  <input type="number" name="convertTo" className='mx-6 text-black font-bold w-80 border-2 border-orange-700 rounded-lg ' readOnly />

                  <select name="currencySelect" className='text-black w-16 border-2 border-orange-700 rounded-lg mx-6  '>
                      
                  </select>

                </div>     
 
              </div>


            </div>




        </div>


    </>
  );
}

export default App;
