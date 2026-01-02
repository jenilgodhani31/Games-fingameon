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
                        The information and games on <strong className="text-white">Fingameon.com</strong>
                        are provided for entertainment only. No guarantee on accuracy or uptime.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Use at Your Own Risk</h2>
                        We are not responsible for any loss while using our website/service.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">External Links</h2>
                        Links to third-party websites may appear — we do not control external content.
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
                        All game copyrights belong to original owners. We claim no ownership.
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
