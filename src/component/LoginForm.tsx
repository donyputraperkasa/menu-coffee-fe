'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        const data = await res.json()

        if (!res.ok) throw new Error(data.message || 'Login gagal')

        // Simpan token
        localStorage.setItem('token', data.access_token)

        // Redirect sesuai role
        if (data.role === 'ADMIN') router.push('/admin')
        else if (data.role === 'KASIR') router.push('/kasir')
        else router.push('/')

        } catch (err: any) {
        setError(err.message)
        } finally {
        setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white focus:outline-none"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white focus:outline-none"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md font-semibold text-white transition-all"
            >
                {loading ? 'Memproses...' : 'Login'}
            </button>
        </form>
    )
}