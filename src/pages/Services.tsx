import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="container mx-auto p-4 mt-16">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <p className="mb-6">Welcome to our services page. Here you can find a list of the services we offer.</p>
            <ul className="list-disc list-inside">
                <li className="mb-2">Service 1: Description of service 1.</li>
                <li className="mb-2">Service 2: Description of service 2.</li>
                <li className="mb-2">Service 3: Description of service 3.</li>
            </ul>
        </div>
    );
};

export default Services;