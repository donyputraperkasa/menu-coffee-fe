'use client'

import Link from 'next/link'
import { Coffee } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
            <Coffee size={28} className="text-amber-400 drop-shadow" />
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                KopiKita
            </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-white/80 font-medium">
            <Link
                href="/"
                className="relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
                Beranda
            </Link>
            <Link
                href="#tentang"
                className="relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
                Tentang
            </Link>
            <Link
                href="#kontak"
                className="relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
                Kontak
            </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-amber-400 transition-colors"
            aria-label="Toggle Menu"
            >
            ☰
            </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-white/80 font-medium bg-white/10 border-t border-white/10">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">
                Beranda
            </Link>
            <Link href="#tentang" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">
                Tentang
            </Link>
            <Link href="#kontak" onClick={() => setMenuOpen(false)} className="hover:text-amber-400 transition">
                Kontak
            </Link>
            </div>
        )}
        </nav>
    )
}