import React, { useState } from 'react';
import axios from 'axios';

const TicketForm = () => {
    const [phoneModel, setPhoneModel] = useState('');
    const [repairType, setRepairType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTicket = { phoneModel, repairType, description };
        try {
            const response = await axios.post('/api/tickets', newTicket);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Phone Model:</label>
            <select value={phoneModel} onChange={(e) => setPhoneModel(e.target.value)}>
                <option value="">Select a phone model</option>
                {/* Populate phone models from API */}
            </select>
            <br />
            <label>Repair Type:</label>
            <input type="text" value={repairType} onChange={(e) => setRepairType(e.target.value)} />
            <br />
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <button type="submit">Create Ticket</button>
        </form>
    );
};

export default TicketForm;