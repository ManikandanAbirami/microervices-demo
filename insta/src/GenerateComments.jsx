import axios from 'axios';
import React, { useState } from 'react'

function GenerateComments({ postId }) {
    const [comment, setComment] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            comment
        });

        setComment('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Please enter your comment:</label>
                    <input
                        value={comment}
                        className='form-control'
                        onChange={(e) => setComment(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default GenerateComments