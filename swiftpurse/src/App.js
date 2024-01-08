

import './App.css';
import './index.css';
import CustomBox from './Components/CustomBox.js';

// import useConverter from './CustomHooks/useConverter';

function App() {

  // const currencyOptions = [];
  
  // let currency = "usd";

  return (
    <>

        <div className=' flex flex-col justify-center items-center' >

            <h1 className=' m-20 text-8xl text-green-300 font-extrabold' >SWIFT-PURSE</h1>

            <CustomBox />  

            <button className='h-14 w-36 bg-blue-400 rounded-lg my-10 text-center text-black font-extrabold ' >SWAP</button> 

            <CustomBox />             

        </div>


    </>
  );
}

export default App;
