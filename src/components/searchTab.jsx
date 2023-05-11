import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const SearchTab = ({handleSubmit, handleSearch, value}) => {

  return (
    <div className='w-full flex justify-between transition-all'>
        <input onChange={handleSearch} className='h-16 w-full p-4 text-2xl text-gray-500 rounded-lg border-l-2 border-t-2 outline-none shadow-lg' value = {value}  type="search" name="" id="" placeholder='Enter city' autoFocus/>
        <button onClick={handleSubmit} className='bg-blue-400 h-16 aspect-square text-2xl text-white rounded-lg border-y-2 border-r-2 shadow-lg grid place-items-center '> <AiOutlineSend/> </button>
    </div>
  )
}

export default SearchTab