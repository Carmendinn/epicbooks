import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

const URLCommentsApi = 'https://striveschool-api.herokuapp.com/api/books';

export default function CommentArea({ asin }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const[add, setAdd]=useState(false)
    useEffect(() => {
        const fetchComments = async () => {
            setIsLoading(true); // Imposto isLoading a true prima di avviare la richiesta

            try {
                const response = await fetch(`${URLCommentsApi}/${asin}/comments`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYTRhMGIxYzc3ZjAwMTUwNjg0ZTUiLCJpYXQiOjE3MTg0NTU1NjIsImV4cCI6MTcxOTY2NTE2Mn0.JoU7OODdu7PGkAkUIKeYrAxpKtaFfGMGHWs_8nSBk7I"
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setComments(data);
                } else {
                    console.error('Errore nel recupero dei commenti:', response.statusText);
                }
            } catch (error) {
                console.error('Errore:', error);
            } finally {
                setIsLoading(false); 
            }
        };

        if (asin) {
            fetchComments();
        }
    }, [add, asin]);

    return (
        <div>
            {isLoading && (
                <div role="status" className="flex justify-center items-center my-3">
                    <svg className="w-6 h-6 animate-spin text-pink-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"></path>
                    </svg>
                    <span className="text-pink-600">Loading...</span>
                </div>
            )}

            <div className="p-4 mt-4 bg-white border rounded-lg shadow">
                <AddComment elementId={asin} setAdd={comments}/>
                <CommentList comments={comments} />
            </div>
        </div>
    );
}
