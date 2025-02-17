import React from 'react';

const About: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700">
                Welcome to our application. Here you can find information about our mission and values.
            </p>
        </div>
    );
};

export default About;