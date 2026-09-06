import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JoinUsBar from '@/components/JoinUsBar';
import FAQHeader from '@/components/props/Header';

interface TeamMember {
    name: string;
    role?: string;
    tutorOf?: string;
    imageUrl?: string;
    email?: string;
    founder?: boolean;
}

interface TeamSubcategory {
    subcategory: string;
    members: TeamMember[];
}

interface TeamCategory {
    category: string;
    description?: string;
    subcategories: TeamSubcategory[];
}

const TeamMemberComponent: React.FC<TeamMember> = ({ name, role, tutorOf, imageUrl, email, founder }) => (
    <div
        className={`relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center ${
            founder ? 'ring-2 ring-blue1' : ''
        }`}
    >
        {founder && (
            <span className="absolute top-3 right-3 bg-blue1 text-white text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
                Founder
            </span>
        )}
        {imageUrl ? (
            <Image src={imageUrl} alt={name} width={128} height={128} className="w-44 md:h-44 h-32 rounded-2xl mb-4 object-cover" />
        ) : (
            <div className="w-44 md:h-44 h-32 rounded-2xl mb-4 bg-gray-200" />
        )}
        <h3 className="text-xl font-semibold text-blue2 mb-2 text-center">{name}</h3>
        {role && <p className="text-blue3 font-medium mb-2 text-center">{role}</p>}
        {tutorOf && <p className="text-blue3 font-medium mb-2 text-center">{tutorOf}</p>}
        {email && (
            <div className="flex gap-4">
                <Link target="_blank" rel="noopener noreferrer" href={`mailto:${email}`} className="text-blue2 hover:text-blue1 transition-colors">
                    <FaEnvelope size={24} />
                </Link>
            </div>
        )}
    </div>
);

// Headshots are keyed by name so a person can appear in more than one section
// (e.g. an executive who also tutors) without duplicating the image path.
const headshots: Record<string, string> = {
    "Aarav Sandip": "/team/aarav_sandip.jpg",
    "Aaron Zou": "/team/aaron_zou.png",
    "Aatman Bhatt": "/team/aatman_bhatt.png",
    "Aditya Nair": "/team/aditya_nair.png",
    "Anishk Nag": "/team/anishk_nag.png",
    "Arnav Hasti": "/team/arnav_hasti.png",
    "Calvin Lam": "/team/calvin_lam.jpg",
    "Eric Yang": "/team/eric_yang.png",
    "Ethan Zou": "/team/ethan_zou.png",
    "Evan Huss": "/team/evan_huss.png",
    "Evan Xiong": "/team/evan_xiong.png",
    "Felix Cheng": "/team/felix_cheng.png",
    "Gautam Goyal": "/team/gautam_goyal.png",
    "Gavin Peng": "/team/gavin_peng.jpg",
    "Jatin Takkoli": "/team/jatin_takkoli.jpg",
    "Jishnu Satapathy": "/team/jishnu_satapathy.jpg",
    "Kevin Qiu": "/team/kevin_qiu.png",
    "Lucas Ma": "/team/lucas_ma.jpg",
    "Mohan Atkuri": "/team/mohan_atkuri.png",
    "Rahul Vinoth": "/team/rahul_vinoth.webp",
    "Shrey Uppal": "/team/shrey_uppal.png",
    "Tony Cheng": "/team/tony_cheng.jpg",
    "Vatsal Sharma": "/team/vatsal_sharma.png",
    "Vishnu Chandrashekar": "/team/vishnu_chandrashekar.jpg",
};

const member = (name: string, role?: string, founder = false): TeamMember => ({
    name,
    role,
    imageUrl: headshots[name],
    founder,
});

const MeetTheTeamPage: React.FC = () => {
    const teamCategories: TeamCategory[] = [
        {
            category: "Executive Board",
            subcategories: [
                {
                    subcategory: "",
                    members: [
                        member("Ethan Zou", "Co-President"),
                        member("Gautam Goyal", "Co-President"),
                        member("Gavin Peng", "Director of Volunteers"),
                        member("Tony Cheng", "Director of Volunteers"),
                        member("Arnav Hasti", "Director of Marketing"),
                        member("Jishnu Satapathy", "Director of Marketing"),
                        member("Aatman Bhatt", "Director of Finance"),
                        member("Vishnu Chandrashekar", "Director of Finance"),
                        member("Jatin Takkoli", "Director of Finance"),
                        member("Aarav Sandip", "Director of Outreach"),
                        member("Lucas Ma", "Director of Outreach"),
                    ]
                }
            ]
        },
        {
            category: "Tutors",
            subcategories: [
                {
                    subcategory: "Introduction to Physics",
                    members: [member("Gautam Goyal"), member("Lucas Ma")]
                },
                {
                    subcategory: "Chess",
                    members: [member("Tony Cheng"), member("Shrey Uppal")]
                },
                {
                    subcategory: "Introduction to Python",
                    members: [member("Aatman Bhatt"), member("Gavin Peng")]
                },
                {
                    subcategory: "UMTYMP Prep",
                    members: [
                        member("Ethan Zou"),
                        member("Aarav Sandip"),
                        member("Aatman Bhatt"),
                        member("Vishnu Chandrashekar"),
                    ]
                },
                {
                    subcategory: "AMC 8 Prep",
                    members: [member("Jatin Takkoli"), member("Kevin Liu"), member("Rahul Vinoth")]
                }
            ]
        },
        {
            category: "TAs",
            subcategories: [
                {
                    subcategory: "UMTYMP",
                    members: [member("Calvin Lam"), member("Vatsal Sharma")]
                },
                {
                    subcategory: "Physics",
                    members: [member("Jatin Takkoli")]
                }
            ]
        },
        {
            // Founding team (2025). The second argument is the college they went
            // on to attend; `true` as the third argument shows the Founder badge.
            category: "Alumni Directors",
            description: "Our founding team, and where they are headed next.",
            subcategories: [
                {
                    subcategory: "",
                    members: [
                        member("Aaron Zou", "Johns Hopkins University", true),
                        member("Kevin Qiu", "Stanford University", true),
                        member("Evan Xiong", "Northwestern University", true),
                        member("Anishk Nag", "University of Colorado Boulder", true),
                        member("Mohan Atkuri", "Harvey Mudd College", true),
                        member("Aditya Nair", "University of Minnesota", true),
                        member("Felix Cheng", "Rice University", true),
                        member("Eric Yang", "University of Illinois Urbana-Champaign", true),
                        member("Evan Huss", "University of Minnesota", true),
                    ]
                }
            ]
        }
    ];

    return (
        <div className='bg-grey'>
            <Head>
                <title>Meet Our Team | METExcellence</title>
                <meta name="description" content="Meet the dedicated team of passionate educators at METExcellence. Learn more about our tutors, officers, and board of directors." />
                <meta property="og:title" content="Meet Our Team | METExcellence" />
                <meta property="og:description" content="Meet the dedicated team of passionate educators at METExcellence. Learn more about our tutors, officers, and board of directors." />
            </Head>
            <Navbar />
            <FAQHeader title='Meet Our Team' description='Our dedicated team of passionate educators is committed to breaking down educational barriers, empowering students with knowledge, and transforming lives through high-quality, completely free tutoring for those who need it most.'/>
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                {teamCategories.map((category, index) => (
                    <div key={index} className="mb-16">
                        <h1 className={`text-3xl font-bold text-blue2 ${category.description ? 'mb-3' : 'mb-8'}`}>{category.category}</h1>
                        {category.description && (
                            <p className="text-blue3 text-lg mb-8">{category.description}</p>
                        )}
                        {category.subcategories.map((subcategory, subIndex) => (
                            <div key={subIndex} className="mb-8">
                                <h2 className="text-2xl font-semibold text-blue2 mb-4">{subcategory.subcategory}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {subcategory.members.map((member, memberIndex) => (
                                        <TeamMemberComponent key={memberIndex} {...member} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="mt-16 text-center">
                    <JoinUsBar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeetTheTeamPage;
