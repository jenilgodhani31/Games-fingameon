'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/games">
          <Image
            src="/assets/images/logo/logo.png"
            alt="FinGameon Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-black text-lg">
          <Link href="/about" className="">About</Link>
          <Link href="/privacy-policy" className="">Privacy</Link>
          <Link href="/terms" className="">Terms</Link>
          <Link href="/games" className="">Games</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-black"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600/95 px-4 pt-5 pb-4 space-y-2">
          <Link href="/about" className="block text-white ">About</Link>
          <Link href="/privacy-policy" className="block text-white ">Privacy</Link>
          <Link href="/terms" className="block text-white ">Terms</Link>
          <Link href="/games" className="block text-white ">Games</Link>
        </div>
      )}
    </nav>
  );
}
