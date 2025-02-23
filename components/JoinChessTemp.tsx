"use client";
import React from 'react';
import Image from 'next/image';

const JoinChessTemp: React.FC = () => {
    return (
        <div className='bg-blue1'>
            <div className="p-4 sm:p-8 max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-6 mt-8">News</h1>
                <p className="text-white text-xl max-w-3xl mx-auto mb-8">
                    Here are some of our flyers
                </p>
                <div className="relative text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow inline-block">
                    <div className="flex items-center"></div>
                        <div>
                        <Image
                            src="/flyers/chessflyer.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            />
                        </div>
                        <button className="absolute bottom-[8.76rem] left-[4.58rem] bg-[#492405] text-white px-4 py-1 rounded-full">
                            Click for more info
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default JoinChessTemp;