import React from 'react'
import { useState } from 'react'

const Maincounter = () => {
    let [count, setcount] = useState(0)
    
  return (
    <div className='h-screen w-screen bg-black flex flex-col items-center justify-center'>
     <div className='bg-white w-fit p-2.5 text-4xl '>
        <h1 className='text-center'>COUNTER:<span>{count}</span></h1>
        <div className='mt-3.5 flex gap-[20px]'>
             <button onClick={()=>{
                setcount(count+1)
             }} className='p-2 bg-green-500 rounded-2xl font-medium '> increment</button>
        <button onClick={()=>{
            setcount(count-1)
        }}  className='p-2 bg-red-800 rounded-2xl font-medium '>decrement</button>

        </div>
     </div>
    </div>
  )
}

export default Maincounter
