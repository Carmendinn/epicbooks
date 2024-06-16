import React from 'react';
import SingleComment from './SingleComment';

export default function CommentList({ comments }) {
    return (
        <div className="mt-4">
            {comments.length > 0 ? (
                comments.map(comment => (
                    <SingleComment key={comment._id} comment={comment} />
                ))
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}
