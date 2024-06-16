import React from 'react';

export default function SingleComment({ comment, onCommentRemoved }) {
    const removeComment = () => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + comment._id, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjYTRhMGIxYzc3ZjAwMTUwNjg0ZTUiLCJpYXQiOjE3MTg0NTU1NjIsImV4cCI6MTcxOTY2NTE2Mn0.JoU7OODdu7PGkAkUIKeYrAxpKtaFfGMGHWs_8nSBk7I"
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Commento eliminato!');
                onCommentRemoved(comment._id);
            } else {
                alert('Errore durante l\'eliminazione del commento');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div key={comment._id} className="border p-2 mb-2 rounded">
            <p>{comment.comment}</p>
            <button 
                onClick={removeComment}
                className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
                X
            </button>
        </div>
    );
}
