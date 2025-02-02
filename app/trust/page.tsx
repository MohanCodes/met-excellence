import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TrustAndSafety: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-4">
                        Trust and Safety Policy for METExcellence.org
                    </h1>
                    <p className="text-blue3 mb-6">
                        Last Updated: February 1, 2025
                    </p>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-blue3 mb-8">
                            At METExcellence.org, we are committed to providing a safe and trustworthy environment for all our users. Our Trust and Safety Policy outlines the measures we take to ensure the security and well-being of our community.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">1. User Safety</h2>
                            <p className="text-blue3 mb-4">
                                We prioritize the safety of our users by:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Implementing strict privacy controls to protect personal information</li>
                                <li>Removing content that could contribute to physical harm or security risks</li>
                                <li>Prohibiting hate speech, bullying, and harassment</li>
                                <li>Protecting minors from exploitation and inappropriate content</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">2. Content Moderation</h2>
                            <p className="text-blue3 mb-4">
                                To maintain a respectful and safe environment, we:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Enforce clear community standards that define acceptable behavior</li>
                                <li>Use advanced technology to detect and prevent abuse</li>
                                <li>Employ a team of moderators to review reported content</li>
                                <li>Provide users with tools to report violations and control their experience</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">3. Data Security</h2>
                            <p className="text-blue3 mb-4">
                                We safeguard user data through:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Robust cybersecurity measures, including multi-factor authentication</li>
                                <li>Regular security audits and updates</li>
                                <li>Compliance with relevant data protection laws and regulations</li>
                                <li>Secure storage and limited access to user information</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">4. Educational Resources</h2>
                            <p className="text-blue3 mb-4">
                                We offer:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Digital citizenship education to promote safe online behavior</li>
                                <li>Resources for parents and educators on online safety</li>
                                <li>Clear guidelines on responsible use of our platform</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">5. Transparency and Accountability</h2>
                            <p className="text-blue3 mb-4">
                                We maintain trust by:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Publishing regular reports on policy enforcement and content removal</li>
                                <li>Collaborating with safety experts and advisory groups</li>
                                <li>Providing clear channels for user feedback and concerns</li>
                                <li>Continuously updating our policies to address emerging challenges</li>
                            </ul>
                        </section>

                        <p className="text-blue3 mt-8">
                            By adhering to these principles, METExcellence.org strives to create a secure and trustworthy platform for educational excellence. We encourage all users to familiarize themselves with our policies and to contribute to maintaining a safe online community.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TrustAndSafety;
