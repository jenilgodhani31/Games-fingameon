import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">

            {/* NAVBAR */}
            <Navbar />

            <div className=" py-10">
                <div className="max-w-4xl mx-auto">

                    {/* PAGE TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
                        Free Online Games – Play Now On FinGameon
                    </h1>

                    {/* INTRO */}
                    <p className="text-center text-blue-100 text-base md:text-lg mb-10">
                        FinGameon features the latest and best free online games. We offer instant
                        play to all our games without downloads, login, popups or other distractions.
                        You can enjoy playing fun games without interruptions from downloads or pop-ups.
                    </p>

                    {/* SECTION 1 */}
                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-3">🎮 About FinGameon</h2>
                        <p className="text-blue-100 leading-relaxed">
                            FinGameon has the best free online games selection and offers the most fun
                            experience to play alone or with friends.
                        </p>
                    </div>

                    {/* SECTION 2 */}
                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-3">👥 Our Team</h2>
                        <p className="text-blue-100 leading-relaxed">
                            FinGameon has a team of 25 people working on our gaming platform. Our mission
                            is simple — to create a browser-gaming platform that works seamlessly for
                            users around the world, and rewards developers both big and small.
                        </p>
                    </div>

                    {/* SECTION 3 */}
                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-3">🌍 Play Anywhere</h2>
                        <p className="text-blue-100 leading-relaxed">
                            Our games are playable on desktop, tablet and mobile so you can enjoy them
                            at school, at home, or on the road. Every month millions of gamers from all
                            over the world play their favorite games on FinGameon. Our goal is to create
                            the ultimate online playground, free and open to all.
                        </p>
                    </div>

                    {/* SECTION 4 */}
                    <div className="bg-white/10 rounded-xl p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-3">🚀 Our Mission</h2>
                        <p className="text-blue-100 leading-relaxed">
                            We're a team of makers, techies, adventurers — and some gamers too. We’re
                            kids of all ages, and love what we do. Just load up your favorite games
                            instantly in your web browser and enjoy the experience.
                        </p>
                    </div>

                    {/* SECTION 5 */}
                    <div className="bg-white/10 rounded-xl p-6 mb-10">
                        <h2 className="text-xl font-semibold mb-3">📱 Device Support</h2>
                        <p className="text-blue-100 leading-relaxed">
                            You can play our games on desktop and mobile devices, including desktop PCs,
                            laptops, Chromebooks, and the latest smartphones and tablets from Apple and Android.
                        </p>
                    </div>

                </div>

                {/* FOOTER */}
                <footer className="w-full text-white border-t-2 border-white text-center py-4">
                    <div className="flex justify-center gap-4 mt-2 text-[18px]">
                        <Link href="/about" className="hover:text-white">About</Link>
                        <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
                        <Link href="/terms" className="hover:text-white">Terms</Link>
                    </div>
                    <div className="text-sm mt-2">
                        © {new Date().getFullYear()} FinGameon. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AboutPage
