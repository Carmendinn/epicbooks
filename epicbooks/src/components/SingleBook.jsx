import React from 'react';
import CommentArea from './CommentArea';

export default function SingleBook({ book, selected, setSelected }) {
    const handleClick = () => {
        setSelected(book.asin); 
    };

    return (
        <div
            className={`bg-gray-200 mt-4 w-[200px] ${selected ? "mb-64" : "mb-4"} h-[380px] border rounded-lg shadow dark:bg-gray-800 ${selected ? "border-2 border-pink-800" : "border border-gray-200"}`}
            onClick={handleClick} 
        >
            <a href="#">
                <img className="mx-auto w-full h-2/3 object-cover rounded-t-lg" src={book.img} alt={book.title} />
            </a>
            <div className="p-2 h-1/3 flex flex-col justify-between">
                <a href="#">
                    <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis line-clamp-2">{book.title}</h5>
                </a>
                <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
                <a
                    href="#"
                    className="mt-auto w-[100px] inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-pink-400 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
            
        </div>
    );
}
