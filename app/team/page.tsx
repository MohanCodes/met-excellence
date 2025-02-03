import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

interface TeamCategory {
    category: string;
    members: TeamMember[];
}

const TeamMember: React.FC<TeamMember> = ({ name, role, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h3 className="text-xl font-semibold text-blue2 mb-2">{name}</h3>
        <p className="text-blue3 font-medium mb-2">{role}</p>
        <div className="flex gap-4">
            <a href="#" className="text-blue2 hover:text-blue1 transition-colors">
                <FaEnvelope size={24} />
            </a>
        </div>
    </div>
);

const MeetTheTeamPage: React.FC = () => {
    const teamCategories: TeamCategory[] = [
        {
            category: "Leadership",
            members: [
                {
                    name: "Jane Doe",
                    role: "Founder & CEO",
                    imageUrl: "/path-to-jane-image.jpg"
                },
                {
                    name: "Mike Johnson",
                    role: "COO",
                    imageUrl: "/path-to-mike-image.jpg"
                }
            ]
        },
        {
            category: "Tutors",
            members: [
                {
                    name: "John Smith",
                    role: "Lead Math Tutor",
                    imageUrl: "/path-to-john-image.jpg"
                },
                {
                    name: "Emily Brown",
                    role: "Science Coordinator",
                    imageUrl: "/path-to-emily-image.jpg"
                },
                {
                    name: "Alex Lee",
                    role: "Language Arts Tutor",
                    imageUrl: "/path-to-alex-image.jpg"
                }
            ]
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-8 text-center">
                    Meet Our Team
                </h1>
                <p className="text-blue3 mb-12 text-center text-xl">
                    Our dedicated team of educators is committed to providing high-quality, free tutoring to students in need.
                </p>
                {teamCategories.map((category, index) => (
                    <div key={index} className="mb-16">
                        <h1 className="text-3xl font-bold text-blue2 mb-8">{category.category}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.members.map((member, memberIndex) => (
                                <TeamMember key={memberIndex} {...member} />
                            ))}
                        </div>
                    </div>
                ))}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-blue2 mb-4">Join Our Team</h2>
                    <p className="text-blue3 mb-6">
                        Are you passionate about education and want to make a difference? We&apos;re always looking for dedicated tutors to join our team.
                    </p>
                    <button className="bg-blue2 text-white px-6 py-2 rounded transition-colors hover:bg-blue-700">
                        Apply Now
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MeetTheTeamPage;
