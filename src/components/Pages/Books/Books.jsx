import React, { Suspense, useEffect, useState } from 'react'
import Book from '../book/Book';

const Books = ({data}) => {
    // const [allBooks,setAllBooks]=useState([]);
    // 1st** data loading
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // console.log(data);
    //         setAllBooks(data)
    //     })

    // },[])

// 2nd wey data loading**

// const bookpromise=fetch("./booksData.json")
// .then(res=>res.json())
    
  return (
    <div>
        <h2 className='text-center text-2xl font-bold p-5'>Books</h2>
      <Suspense fallback={<span><span className="loading loading-infinity loading-xl"></span></span>}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
        data.map(singlebook=><Book key={singlebook.bookId}singlebook={singlebook}></Book>)
      }
      </div>

      </Suspense>
    </div>
  )
}

export default Books

    