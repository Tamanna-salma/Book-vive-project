import React from 'react'
import bookimg from '../../../src/assets/books.jpg'
const Banner = () => {
  return (
    <div className='flex-col-reverse flex md:flex-row justify-between items-center bg-gray-100 p-10 rounded-xl mt-4'>
        <div className=' w-full md:w-[50%]'>
            <h2 className='text-2xl md:text-5xl font-bold'>Books to freshen up your bookshelf</h2>
            <button className='btn bg-green-400 rounded text-white mt-3 md:mt-5 hover:bg-gray-500 '>View the list</button>
        </div>
        <div className='w-full md:w-[50%]'>
            <img className='w-xl rounded-xl' src={bookimg} alt="" />
        </div>
    </div>
  )
}

export default Banner