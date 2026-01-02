import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">

            {/* NAVBAR */}
            <Navbar />

            <div className=" py-10">
                <div className="max-w-4xl mx-auto space-y-6">

                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Privacy Policy
                    </h1>

                    {/* Section: Introduction */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Welcome to <strong className="text-white">FinGameon.com</strong>! This Privacy Policy
                            and Terms of Use govern your use of our website and any related services offered by
                            FinGameon. By using our website, you agree to the terms outlined in this policy. Please
                            read this document carefully to understand how we collect, use, and protect your
                            information.
                        </p>
                    </div>

                    {/* Section: Data Collection */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">2. Data Collection</h2>
                        <p className="text-blue-100 leading-relaxed">
                            We do not collect any user information or data from users.
                        </p>
                    </div>

                    {/* Section: Use of Data */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">3. Use of Data</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Any data collected is used for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-blue-100 space-y-1 mt-2">
                            <li>To provide and maintain our website.</li>
                            <li>To manage your account and affiliate partner program participation.</li>
                            <li>To communicate regarding accounts, inquiries, and updates.</li>
                            <li>To enhance website functionality and user experience.</li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </div>

                    {/* Section: Third-Party Services */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
                        <p className="text-blue-100 leading-relaxed">
                            While we do not allow third parties to access or process data directly, we may use
                            third-party payment processors to facilitate transactions. Please review their
                            respective privacy policies for more information.
                        </p>
                    </div>

                    {/* Section: Location */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">5. Location of Data Processing</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Your data will be processed in the United States, where our servers are located.
                        </p>
                    </div>

                    {/* Section: Children */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">6. Children's Privacy</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Our website is accessible to children; however, it is not designed for children under 13.
                            We do not knowingly collect personal information from children under 13. If you believe
                            a child has provided personal information, please contact us, and we will promptly delete it.
                        </p>
                    </div>

                    {/* Section: Security */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">7. Security Measures</h2>
                        <p className="text-blue-100 leading-relaxed">
                            We implement reasonable security measures to protect personal information from unauthorized
                            access, disclosure, alteration, or destruction. However, no data transmission over the
                            internet or storage system can be guaranteed as 100% secure. Please take precautions when
                            sharing your information online.
                        </p>
                    </div>

                    {/* Section: Gambling / Game Coins */}
                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">8. Games & Virtual Coins</h2>
                        <p className="text-blue-100 leading-relaxed">
                            We do not collect or store any information related to gambling activities. All in-game
                            coins are virtual and have no real value. All games are for fun and entertainment, and
                            we do not ask for payments from users.
                        </p>
                    </div>

                    {/* Section: Last Updated */}
                    <div className="bg-white/10 rounded-xl p-6 mb-10">
                        <h2 className="text-xl font-semibold mb-2">9. Last Updated</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Last updated: 06/12/2022
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <footer className="w-full text-white border-t-2 border-white text-center py-4">
                    <div className="flex justify-center gap-4 mt-2 text-[18px]">
                        <Link href="/about" className="hover:text-white">About</Link>
                        <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
                        <Link href="/terms" className="hover:text-white">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link> 
                    </div>
                    <div className="text-sm mt-2">
                        © {new Date().getFullYear()} FinGameon. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage
