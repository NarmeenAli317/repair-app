import React from 'react';
import TicketForm from './TicketForm';
import CommentSection from './CommentSection';

function App() {
    return (
        <div>
            <h1>Cellphone and Watch Repair System</h1>
            <TicketForm />
            <CommentSection ticketId={1} /> {/* Replace with actual ticket ID */}
        </div>
    );
}

export default App;