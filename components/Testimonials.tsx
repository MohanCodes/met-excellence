"use client";

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Slideshow from '@/components/props/Slideshow'; // Make sure this path is correct

interface TestimonialProps {
    text: string;
    author: string;
}

const TestimonialsPage: React.FC = () => {
    const testimonials = [
        {
            text: "Thanks to the organizers, the children gained a lot, and the teachers were very organized and patient. 👍",
            author: "Chess Parent"
        },
        {
            text: "The first thing my son said when he got in the car was that it was worth driving 45 minutes. Thank you again. 🙏",
            author: "Chess Parent"
        },
        {
            text: "Thank you so much for organizing this event! My child really enjoys it and is already looking forward to next Sunday.",
            author: "Chess Parent"
        },        
    ];

    const TestimonialCard: React.FC<TestimonialProps> = ({ text, author }) => (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-md mx-auto h-full">
            <FaQuoteLeft className="text-blue2 text-2xl mb-4" />
            <p className="text-blue3 mb-4">{text}</p>
            <p className="text-blue2 font-semibold">- {author}</p>
        </div>
    );

    const testimonialSlides = testimonials.map((testimonial, index) => ({
        content: <TestimonialCard key={index} {...testimonial} />,
        duration: 5000 // 5 seconds per slide
    }));

    return (
        <div className='bg-grey pb-12'>
            <div className="p-4 sm:p-8 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue2 mb-6 mt-9">What people are saying</h1>
                    <p className="text-blue3 text-xl max-w-3xl mx-auto">Our parents love how online tutoring helps their children make a real impact.</p>
                </div>
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className="lg:hidden">
                    <Slideshow items={testimonialSlides} height='h-56' />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
