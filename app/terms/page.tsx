import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 sm:p-8 max-w-6xl mx-auto my-8">
                <div className="flex flex-col">
                    {/* Header */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue2 mb-4">
                        Terms and Conditions for METExcellence.org
                    </h1>
                    <p className="text-blue3 mb-6">
                        Effective Date: February 1, 2025
                    </p>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-blue3 mb-8">
                            Welcome to METExcellence.org. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-blue3">
                                By using METExcellence.org, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">2. Use of the Website</h2>
                            
                            <h3 className="text-xl font-semibold text-blue2 mb-3">2.1 User Conduct</h3>
                            <p className="text-blue3 mb-4">
                                You agree to use METExcellence.org only for lawful purposes and in a manner that does not infringe upon or restrict others' use and enjoyment of the website.
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-blue3">
                                <li className="mb-2">Violating any applicable laws or regulations</li>
                                <li className="mb-2">Attempting to interfere with the proper functioning of the website</li>
                                <li className="mb-2">Impersonating any person or entity</li>
                                <li className="mb-2">Collecting or storing personal data about other users without their consent</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-blue2 mb-3">2.2 Account Responsibility</h3>
                            <p className="text-blue3">
                                If you create an account on METExcellence.org, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">3. Intellectual Property</h2>
                            <p className="text-blue3">
                                All content on METExcellence.org, including but not limited to text, graphics, logos, and software, is the property of METExcellence.org and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">4. Limitation of Liability</h2>
                            <p className="text-blue3">
                                METExcellence.org provides its services on an "as is" and "as available" basis. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. To the fullest extent permitted by law, we disclaim all warranties, express or implied.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">5. Privacy Policy</h2>
                            <p className="text-blue3">
                                Your use of METExcellence.org is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">6. Changes to Terms</h2>
                            <p className="text-blue3">
                                We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of METExcellence.org after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">7. Termination</h2>
                            <p className="text-blue3">
                                We reserve the right to terminate or suspend your access to METExcellence.org, without prior notice or liability, for any reason, including if you breach these Terms and Conditions.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue2 mb-4">8. Governing Law</h2>
                            <p className="text-blue3">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Minnesota, United States, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        {/* Final Agreement */}
                        <p className="text-blue3 mt-8">
                            By using METExcellence.org, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
