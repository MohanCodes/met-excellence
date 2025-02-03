import React from 'react';
import Link from 'next/link';

const Banner: React.FC = () => {
    return (
        <div className="bg-blue1 text-center text-white p-4">
            <p className="text-sm inline">Staff Needed! We need officers who are competent in graphic design!</p>
            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform">
                <button className="ml-4 mt-2 sm:mt-0 bg-white text-blue1 py-0.5 px-3 rounded inline text-sm">Apply Now</button>
            </Link>
        </div>
    );
};

export default Banner;