import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { AddToStoreDB, addToStoreDB } from '../../Utility/addYoDB';

const BookDetails = () => {
  const { id } = useParams();
  const bookid = parseInt(id);
  const data = useLoaderData();
  const singlebook = data.find(book => book.bookId === bookid)
  const { bookName, image, totalPages,author, category,rating, publisher,yearOfPublishing, review, tags } = singlebook || {};
  const handleRead=id=>{
addToStoreDB(id)

  }
  const handleWist=()=>{
    AddToStoreDB(id)
  }
  return (
    <div className=' flex flex-col md:flex-row gap-9' >
      <div className='w-full md:w-[50%] rounded-xl mt-7 bg-gray-200 '>
        <img className=' rounded-xl mt-3 p-5' src={image} alt="" />
      </div>

      <div className='w-full  md:w-[50%] p-5 rounded mt-7'>
        <h4 className='text-xl md:text-4xl'>{bookName}</h4>
        <p className='mt-2 text-xl'>By : {author}</p>
        <hr className='mt-3 bg-gray-100 border-gray-300' />
        <h5 className='mt-2 text-xl'>{category}</h5>
        <hr className='mt-3 bg-gray-100 border-gray-300' />
        <h2 className='mt-5'>review : {review}</h2>
        <div className='flex justify-center gap-7 mt-3 font-bold text-green-600'>
          {
            tags.map(tag => <button> {tag}</button>)
          }

        </div>
        <hr className='mt-3 bg-gray-100 border-gray-300 ' />

        <div className='flex gap-9 mt-4'>
          <p>Number of pages : </p>
          <p className='font-bold'>{totalPages}</p>
        </div>

        <div className='flex gap-9 mt-4'>
          <p>publisher : </p>
          <p className='font-bold'>{publisher}</p>
        </div>

        <div className='flex gap-9 mt-4'>
          <p>Year of publishing : </p>
          <p className='font-bold'>{yearOfPublishing}</p>
        </div>

        <div className='flex gap-9 mt-4'>
          <p>Rating  : </p>
          <p className='font-bold'>{rating}</p>
        </div>
<div className='flex gap-6 mt-5'>
  <button onClick={()=>handleRead(id)} className="btn ">Read</button>
<button onClick={()=>handleWist(id)} className="btn text-white bg-blue-400 hover:bg-blue-600 ">Add to wishlist</button>

</div>
      </div>
    </div>
  )
}

export default BookDetails
