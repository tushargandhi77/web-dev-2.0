import React, { useState } from 'react';

export default function MessageDetails({ message }) {
    const [isShown, setIsShown] = useState(false);
    return (
        <>
        <div>
            {message.map((message, index) => (
                <div key={index} className='row'>
                    <h5>{message.message}</h5>
                </div>
            ))}
        </div>

        <div>
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? 'Hide' : 'Show'}
            </button>
            {isShown && <div>This content is shown when the button is clicked.</div>}
        </div>
        </>
    );
}
