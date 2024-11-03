import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ ticketId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get(`/api/comments/${ticketId}`)
            .then(response => setComments(response.data))
            .catch(err => console.error(err));
    }, [ticketId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCommentData = { ticketId, comment: newComment };
        try {
            const response = await axios.post('/api/comments', newCommentData);
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.comment}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>New Comment:</label>
                <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;