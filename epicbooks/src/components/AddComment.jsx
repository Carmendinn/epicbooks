import React, { useState } from 'react';

export default function AddComment({ elementId, setAdd, add }) {
  const [comments, setComments] = useState({ comment: '', rate: 0, elementId: elementId });

  const setCommentHandler = (e) => {
    e.stopPropagation(); // Stop event propagation
    setComments({ ...comments, comment: e.target.value, elementId: elementId });
  };

  const setRateHandler = (e) => {
    e.stopPropagation(); 
    setComments({ ...comments, rate: e.target.value,
      elementId: elementId
     });
  };

  const sendComment = (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(comments),
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYTRhMGIxYzc3ZjAwMTUwNjg0ZTUiLCJpYXQiOjE3MTg0NTU1NjIsImV4cCI6MTcxOTY2NTE2Mn0.JoU7OODdu7PGkAkUIKeYrAxpKtaFfGMGHWs_8nSBk7I"
      }
    })
    .then(response => response.json()) 
    .then(data => {
      console.log(data);
      alert('Commento aggiunto!');
      setAdd(!add)
      setComments({ comment: '', rate: 0, elementId: elementId });
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form className="relative mt-1 rounded-md shadow-sm p-1 bg-white dark:bg-gray-800" onSubmit={sendComment} onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          placeholder="Comment here..."
          value={comments.comment}
          onChange={setCommentHandler}
          required
        />
      </div>
      <div className="flex items-center mt-2">
        <select
          className="w-full h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm"
          value={comments.rate}
          onChange={setRateHandler}
          required
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-0 w-full text-sm text-white bg-pink-600 hover:bg-pink-700 rounded-md py-2 mt-2"
      >
        Add
      </button>
    </form>
  );
}
