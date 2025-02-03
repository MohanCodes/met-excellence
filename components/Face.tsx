import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import Slideshow from './Slideshow';

const TutoringPage: React.FC = () => {
    const slides = [
        {
          content: (
            <Image
              src="https://lh5.googleusercontent.com/NJebQet3qovM9ETXi2-h37-umW4UixPtEfXauoRgfH61ms9cdqD_DNf4OClJWz7YP_FTXI_FZpd9l74fYnn3bPqoBcd9BFb_z-dgO_cG--RKeaoDODdAHRrjfL9RNK2z=w1280"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          ),
          duration: 3000, // 5 seconds
        },
        {
          content: (
            <Image
              src="https://lh5.googleusercontent.com/NJebQet3qovM9ETXi2-h37-umW4UixPtEfXauoRgfH61ms9cdqD_DNf4OClJWz7YP_FTXI_FZpd9l74fYnn3bPqoBcd9BFb_z-dgO_cG--RKeaoDODdAHRrjfL9RNK2z=w1280"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          ),
          duration: 3000, // 5 seconds
        },
      ];
    
    return (
        <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side - Text content */}
            <div className="w-full lg:w-5/12">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-4 text-center lg:text-left">
                Free online tutoring,
                <br />
                for students in need.
                </h1>
                <p className="text-blue3 mb-6 text-center lg:text-left text-xl">
                MET Excellence offers a variety of free classes in subjects such as math, 
                science, reading, writing, computer programming, and ACT prep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/classes">
                    <button className="bg-blue2 text-white px-6 py-2 rounded transition-colors w-full sm:w-auto">
                    Start Learning
                    </button>
                </Link>
                <Link href="/become-a-tutor">
                    <button className="bg-grey text-blue2 px-6 py-2 rounded hover:bg-gray-200 transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto">
                    Become a Tutor
                    <FaAngleRight className='ml-2'/> 
                    </button>
                </Link>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-7/12 rounded-lg shadow-lg overflow-hidden">
                <Slideshow items={slides} />
            </div>
            </div>
        </div>
    );
};

export default TutoringPage;
