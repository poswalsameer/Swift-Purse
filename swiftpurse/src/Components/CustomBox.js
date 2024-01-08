import React from 'react'

function CustomBox() {
  return (
    <>
    
        <div className='h-28 w-[36rem] bg-blue-400 rounded-lg flex flex-col justify-center' >

          <div className='flex flex-row justify-between my-2 ' >
                <label className='text-black font-bold ml-6 ' > FROM </label>
                <p className='text-black font-bold mr-4 ' >Currency Type</p>
          </div>

          <div className='flex flex-row justify-center my-2 ' >
            <input type="number" className='h-8 w-[24rem] mr-10 rounded-lg ' />

            <select className='ml-12 rounded-lg ' >
              <option value="usd" >USD</option>
            </select>
          </div>

          

        </div>
    
    </>
  )
}

export default CustomBox
