import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-b from-primary-700 to-primary-900 text-white">
            <div className="container mx-auto px-4 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Welcome to Umusare
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                        Empowering communities through sustainable development and cultural preservation
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                        <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default HeroSection;