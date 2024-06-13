import React from 'react'
import SingleBook from './SingleBook';
import SearchBook from './SearchBook';
export default function AllTheBooks(props) {
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {props.books.filter(book => book.title.toLowerCase().includes(props.searchQuery)).map((book) => (
                    <SingleBook key={book.asin} book={book}
                        selected={selected}
                        setSelected={setSelected} />
                ))}
            </div>
        </>
    )
}
