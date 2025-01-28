import React, { useState } from 'react';

const GuestForm: React.FC = () => {
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Guest Name:', guestName);
        console.log('Guest Email:', guestEmail);
        // Reset form fields
        setGuestName('');
        setGuestEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Guest Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Guest Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Add Guest
            </button>
        </form>
    );
};

export default GuestForm;