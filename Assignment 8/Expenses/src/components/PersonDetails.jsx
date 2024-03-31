// PersonDetails.js
import React from 'react';

export default function PersonDetails({ person }) {
    return (
        <div>
            {person && person.length > 0 ? (
                person.map((p, index) => (
                    <div key={index} className='row g-2'>
                        <div className='col'>
                            <h3 className='text-success'>
                                {p.personname} is {p.personage} years old.
                            </h3>
                        </div>
                    </div>
                ))
            ) : (
                <p>No person details available.</p>
            )}
        </div>
    );
}
