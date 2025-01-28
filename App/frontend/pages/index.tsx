import React from 'react';
import GuestForm from '../components/GuestForm';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Guest Registration</h1>
            <GuestForm />
        </div>
    );
};

export default Home;