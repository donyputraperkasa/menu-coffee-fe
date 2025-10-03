'use client'

import { Coffee } from 'lucide-react'

export default function Footer() {
    return (
        <footer
        id="kontak"
        className="py-8 px-6 text-center text-white/70 bg-white/10 border-t border-white/20 backdrop-blur-lg mt-auto shadow-lg"
        >
        <div className="flex flex-col items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
            <Coffee size={20} className="text-amber-400" />
            <span className="font-semibold tracking-wide text-white drop-shadow-sm">KopiKita</span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/80">
            © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">KopiKita</span>. Semua Hak Dilindungi.
            </p>

            {/* Tagline */}
            <p className="text-xs text-white/70 max-w-md">
            Dibuat dengan <span className="text-amber-400">☕</span> dan semangat pagi untuk menghadirkan cita rasa terbaik.
            </p>

            {/* Decorative Line */}
            <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70"></div>
        </div>
        </footer>
    )
}