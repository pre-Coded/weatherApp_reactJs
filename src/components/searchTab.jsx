import React from 'react'
import { useState } from 'react'

const SearchTab = ({handleSubmit}) => {
    const [input, setInput] = useState("");

    const handleInput = (event) =>{
        event.target.value = event.target.value.toUpperCase();
        setInput(event.target.value);
    }

  return (
    <div className='w-full flex justify-between transition-all'>
        <input onChange={handleInput} className='h-16 w-full p-4 text-2xl text-gray-500 rounded-lg border-l-2 border-t-2 outline-none shadow-lg'  type="search" name="" id="" placeholder='Enter city' autocapitalize='words'/>
        <button onClick={()=>{
            handleSubmit(input);
        }} className='bg-blue-400 h-16 aspect-square text-xl text-white rounded-lg border-y-2 border-r-2 shadow-lg'> Go </button>
    </div>
  )
}

export default SearchTab