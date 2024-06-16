import React, { useState } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

export default function AllTheBooks({ books, search }) {
    const [selectedBook, setSelectedBook] = useState(null);

    const handleSelectBook = (asin) => {
        setSelectedBook(selectedBook === asin ? null : asin);
    };

    return (
        <div className="container mx-2 px-2 flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books
                    .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
                    .map((book) => (
                        <SingleBook
                            book={book}
                            selected={selectedBook === book.asin}
                            setSelected={() => handleSelectBook(book.asin)}
                            key={book.asin}
                        />
                    ))}
            </div>

            {selectedBook && (
                <div className='mx-auto'>
                    <CommentArea asin={selectedBook} />
                </div>
            )}
        </div>
    );
}
