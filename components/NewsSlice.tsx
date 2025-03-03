"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsSlice: React.FC = () => {
    const flyers = [
        { src: "/flyers/chessflyer.png", alt: "Chess flyer", href: "/classes", classVal: "chess" },
        { src: "/flyers/umptympflyer.png", alt: "UMTYMP flyer", href: "/classes", classVal: "umtymp-entrance-exam-prep" },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % flyers.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const currentFlyer = flyers[currentSlide];

    return (
        <div className='bg-blue3 flex flex-col justify-center items-center'>
            <div className="w-full max-w-6xl mx-auto text-center px-4 py-16">
                <h1 className="text-4xl font-bold text-white mb-6">News</h1>
                <p className="text-white text-xl mb-8">
                    Here are some of our flyers
                </p>
                <div className="relative w-full h-96">
                    <Link href={currentFlyer.classVal ? `${currentFlyer.href}?class=${currentFlyer.classVal}` : currentFlyer.href}>
                        <Image
                            src={currentFlyer.src}
                            alt={currentFlyer.alt}
                            fill
                            className="object-contain"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsSlice;
