import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-4">
                        Privacy Policy for METExcellence.org
                    </h1>
                    <p className="text-blue3 mb-6">
                        Last Updated: February 1, 2025
                    </p>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-blue3 mb-8">
                            At METExcellence.org, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">1. Information We Collect</h2>
                            <p className="text-blue3">
                                We collect the following personal information when you use our services:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Name and contact information (email address)</li>
                                <li>Account credentials and login information</li>
                                <li>Technical information including browser type and device information</li>
                                <li>Usage data including how you interact with our website and services</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">2. How We Use Your Information</h2>
                            <p className="text-blue3">
                                We use your personal information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>To provide and maintain our educational services</li>
                                <li>To communicate with you about our programs and services</li>
                                <li>To process your transactions and manage your account</li>
                                <li>To improve our website and user experience</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">3. Information Sharing</h2>
                            <p className="text-blue3">
                                We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Service providers who assist in operating our website</li>
                                <li>Educational partners and tutors as necessary for service delivery</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">4. Data Security</h2>
                            <p className="text-blue3">
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">5. Your Privacy Rights</h2>
                            <p className="text-blue3">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li>Access your personal information</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your information</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">6. Children's Privacy</h2>
                            <p className="text-blue3">
                                We do not knowingly collect information from children under 13 without parental consent. If you believe we have inadvertently collected such information, please contact us immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">7. Changes to This Policy</h2>
                            <p className="text-blue3">
                                We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
