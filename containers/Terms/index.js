import React from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';

function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">

            {/* NAVBAR */}
            <Navbar />

            {/* MAIN CONTENT */}
            <div className=" py-10">
                <div className="max-w-4xl mx-auto">

                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Terms & Conditions
                    </h1>

                    <p className="text-blue-100 mb-6">
                        Welcome to <strong className="text-white">FinGameon</strong>.
                        By accessing or using our website, you agree to comply with and be bound
                        by the following terms and conditions.
                    </p>

                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">🎮 Use of Website</h2>
                        <p className="text-blue-100 leading-relaxed">
                            FinGameon provides online games for entertainment purposes only.
                            You agree to use this website only for lawful purposes and in a way
                            that does not harm the platform or other users.
                        </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">📌 Intellectual Property</h2>
                        <p className="text-blue-100 leading-relaxed">
                            All content, logos, and design elements on FinGameon belong to
                            their respective owners. You may not copy or redistribute content
                            without permission.
                        </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">⚠️ Disclaimer</h2>
                        <p className="text-blue-100 leading-relaxed">
                            All games are provided "as is". FinGameon does not guarantee
                            uninterrupted access or error-free gameplay.
                        </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">🔄 Changes to Terms</h2>
                        <p className="text-blue-100 leading-relaxed">
                            We reserve the right to update or change these Terms at any time.
                            Continued use of the website after changes means acceptance of
                            the updated Terms.
                        </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 mb-10">
                        <h2 className="text-xl font-semibold mb-2">📩 Contact</h2>
                        <p className="text-blue-100 leading-relaxed">
                            If you have any questions about these Terms, please contact us
                            through the website.
                        </p>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
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
    )
}

export default TermsPage
