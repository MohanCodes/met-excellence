import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Flyer {
    src: string;
    alt: string;
    href: string;
    external?: boolean;
}

const flyers: Flyer[] = [
    {
        src: "/flyers/chessflyer.png",
        alt: "Chess Class poster - every other Sunday at Ridgedale Library",
        href: "/classes/chess",
    },
    {
        src: "/flyers/amc8flyer.png",
        alt: "AMC 8 Preparation poster - new class for Fall 2026",
        href: "/classes?class=amc-8-prep",
    },
    {
        src: "/flyers/physicsflyer.png",
        alt: "Intro to Physics flyer",
        href: "/classes?class=intro-to-physics",
    },
    {
        src: "/flyers/tutorsflyer.png",
        alt: "We are looking for tutors flyer",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform",
        external: true,
    },
    {
        src: "/flyers/freetutoringflyer.png",
        alt: "Need free tutoring flyer",
        href: "/classes",
    },
];

const NewsSlice: React.FC = () => {
    // The track holds two copies of the poster list. The `animate-scroll`
    // keyframe (tailwind.config.ts) slides it by -50%, so once the first copy
    // has scrolled out the second copy is exactly where the first started and
    // the loop restarts seamlessly. Each poster carries its own right margin
    // (instead of flex gap) so both halves of the track are the same width.
    const track = [...flyers, ...flyers];

    return (
        <div className='bg-blue3 flex flex-col justify-center items-center'>
            <div className="w-full max-w-6xl mx-auto text-center px-4 py-16">
                <h1 className="text-4xl font-bold text-white mb-6">News</h1>
                <p className="text-white text-xl mb-8">
                    Here are some of our flyers
                </p>
                <div className="group relative overflow-hidden py-2">
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                        {track.map((flyer, index) => {
                            const isDuplicate = index >= flyers.length;
                            return (
                                <Link
                                    key={`${flyer.src}-${index}`}
                                    href={flyer.href}
                                    aria-hidden={isDuplicate || undefined}
                                    tabIndex={isDuplicate ? -1 : undefined}
                                    className="mr-8 shrink-0"
                                    {...(flyer.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                    <div className="relative w-56 sm:w-64 md:w-72 aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                                        <Image
                                            src={flyer.src}
                                            alt={isDuplicate ? "" : flyer.alt}
                                            fill
                                            sizes="(min-width: 768px) 288px, (min-width: 640px) 256px, 224px"
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-blue3 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-blue3 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default NewsSlice;
