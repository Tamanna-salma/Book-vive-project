import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorBook } from '../../Utility/addYoDB';
import Book from './book/Book';
const ReadList = () => {
    const [readlist, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBook = getStorBook();
        const convertedStoredBook = storedBook.map(id => parseInt(id))
        const myReadlist = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadlist);

    }, []);

    const handleSort = (type) => {
        setSort(type)
        if (type === "Pages") {
            const sortbypage = [...readlist].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortbypage)
        }
        if (type === "Ratings") {
            const sortbyratings = [...readlist].sort((a, b) => a.rating - b.rating)
            setReadList(sortbyratings)
        }


    }
    return (
        <div className='mb-7'>
            <div className='text-center mt-2'>
                <details className="dropdown">
                    <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readlist.length}</h2>
                   
                    {
                        readlist.map(b => <Book key={b.bookId} singlebook={b}></Book>)
                    }

                </TabPanel>

                <TabPanel>
                    <h2>My wish List {readlist.length}</h2>
                    {
                        readlist.map(b => <Book key={b.bookId} singlebook={b}></Book>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default ReadList