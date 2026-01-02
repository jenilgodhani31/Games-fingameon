"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import { createSlug } from "@/utils/slug";

export default function Disclaimer({ data }) {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white min-h-screen">

            <Navbar />

            <div className="py-10 flex flex-col md:flex-row gap-8 px-4 max-w-7xl mx-auto">

                <div className="md:w-8/12 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Disclaimer</h1>

                    <div className="bg-white/10 rounded-xl p-6">
                        The information and games provided on <strong className="text-white">Fingameon.com</strong>
                        are for entertainment purposes only. While we strive to ensure that all content is accurate, up-to-date, and functional, fingameon.com makes no warranties or guarantees of any kind regarding the availability, performance, or accuracy of our games and related content.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Use at Your Own Risk</h2>
                        By using our website, you acknowledge that you do so at your own risk. fingameon.com will not be held responsible for any loss, damage, or inconvenience resulting from the use of our site or inability to access
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">External Links</h2>
                        Some games or pages on fingameon.com may contain links to third-party websites. We have no control over the content, policies, or practices of these external sites, and we are not responsible for them. Visiting any external link is solely at your discretion.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
                        All game copyrights and trademarks belong to their respective owners. fingameon.com does not claim ownership over any third-party game content and hosts such games in accordance with fair use, licensing agreements, or public availability.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 mb-4">
                        <h2 className="text-xl font-semibold mb-2">Contact</h2>
                        Email: <a href="mailto:contact@fingameon.com" className="underline text-white">contact@fingameon.com</a>
                    </div>
                </div>

                {/* Right Sidebar Games List */}
                <div className="md:w-4/12 bg-white/10 p-4 rounded-xl ">
                    <h3 className="text-xl font-semibold mb-3">Popular Games</h3>

                    <div className="grid grid-cols-2 gap-5">
                        {data?.slice(0, 10).map((item, i) => (
                            <Link key={i} href={`/games/${createSlug(item.name)}`}>
                                <div className="relative rounded-md cursor-pointer group overflow-hidden">

                                    {/* Game Image */}
                                    <img
                                        src={item.banner}
                                        className="rounded  group-hover:scale-105 transition-all duration-300"
                                    />
                                    <div className="absolute  bottom-0 left-0 w-full h-full bg-black/20 text-white text-lg font-medium p-1 
            flex items-end justify-center pb-2">
                                        {item.name}
                                    </div>


                                </div>
                            </Link>
                        ))}
                    </div>

                </div>


            </div>

            {/* Footer */}
            <footer className="text-center border-t mt-10 py-4">
                <div className="flex justify-center gap-6 text-lg">
                    <Link href="/about">About</Link>
                    <Link href="/terms">Terms</Link>
                    <Link href="/privacy-policy">Privacy</Link>
                    <Link href="/disclaimer">Disclaimer</Link>
                </div>
                <p className="text-sm opacity-80 mt-2">© {new Date().getFullYear()} Fingameon</p>
            </footer>

        </div>
    );
}
