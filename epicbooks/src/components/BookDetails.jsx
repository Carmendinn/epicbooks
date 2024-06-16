import React from 'react'
import { useParams } from 'react-router-dom';
import fantasy from '../books/fantasy.json';
import CommentArea from './CommentArea';


export default function BookDetails() {
    const { asin } = useParams();
    const book = fantasy.find(b => b.asin === asin)
    return (
        <div className='flex mt-[200px]'>
            <div className='mx-auto my-auto'>
                <div
                    className='bg-gray-200 mt-4 w-[200px] rounded' >
                    <a href="#">
                        <img className="mx-auto w-full h-2/3 object-cover rounded-t-lg" src={book.img} alt={book.title} />
                    </a>
                    <div className="p-2 h-1/3 flex flex-col justify-between">
                        <a href="#">
                            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden text-ellipsis line-clamp-2">{book.title}</h5>
                        </a>
                        <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">{book.description}</p>
                    </div>

                </div>
        
            </div>
            <div>
                <p className="mb-1 text-2xl font-normal text-pink-400">{book.title}</p>
                <p className="mb-1 text-base font-normal text-white"> €{book.price}</p>
                <p className="mb-1 text-base font-normal text-white">{book.category}</p>
            </div>
            <div className='mx-auto w-[500px]'>
                    <CommentArea asin={asin} />
                </div>
        </div>
    )

}
