'use client'

import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '@/component/Footer'
import LoginForm from '@/component/LoginForm'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-stone-900 via-amber-900 to-yellow-800 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Nikmati Secangkir <span className="text-amber-400">Kopi Terbaik</span> di Setiap Hari
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
          Setiap momen berharga dimulai dengan aroma kopi yang menenangkan.
          Silakan login untuk mulai menggunakan sistem.
        </p>

        {/* Satu Form Login */}
        <div className="w-full max-w-md bg-white/10 p-6 rounded-lg border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Login ke Sistem</h2>
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}