import { useState } from 'react';
import MessageForm from '../components/MessageForm';
import MessageDetails from '../components/MessageDetails';

export default function Two() {
    const [message, setMessages] = useState([]);

    function addMessage(newMessage) {
        console.log(newMessage); // Check if newMessage is received correctly
        setMessages([newMessage, ...message]);
    }

    return (
        <div>
            <div className='row'>
                <div className="col">
                    <MessageForm addMessage={addMessage} />
                    <MessageDetails message={message} />
                </div>
            </div>
        </div>
    );
}
