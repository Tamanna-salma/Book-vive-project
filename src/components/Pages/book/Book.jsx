// import React, { use } from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({singlebook}) => {
    // const data=use(bookpromise);
    // console.log(data);
    const{bookName,author, bookId,image,tags,rating,category ,yearOfPublishing,publisher,totalPages}=singlebook;
  return (
  <Link to={`/bookDetails/${bookId}`}>
   <div className="card bg-base-100 w-full md:w-96 shadow-sm border p-4">
  <figure className='bg-gray-100 w-2/3  mx-auto p-4'> 
    <img className='h-40' src={image} alt="Shoes" />
  </figure>

  <div className="card-body">
    <div className='flex justify-center gap-7'>
        {
            tags.map(tag=><button>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <div className='flex gap-4'>
      
        <p>By :{publisher}</p>
      
          <h3>{author}</h3>
    </div>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{totalPages}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
      
    </div>
  </div>
</div>
  </Link>
  )
}

export default Book
