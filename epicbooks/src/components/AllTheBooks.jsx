import React, { useState } from 'react'
import SingleBook from './SingleBook';
import SearchBook from './SearchBook';

export default function AllTheBooks({books, search}) {
    const [selected, setSelected] = useState(false);
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {books.filter(book => book.title.toLowerCase().includes(search)).map((book) => (
                    <SingleBook book= {book} selected = {selected} setSelected = {setSelected} key={book.asin} 
                         />
                ))}
            </div>
        </>
    )
}
