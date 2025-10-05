"use client";

import { useEffect, useState } from "react";

export default function KasirPage() {
    const [stats, setStats] = useState({
        totalCategory: 0,
        totalMenu: 0,
        totalOrder: 0,
        totalUser: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });

            const data = await res.json();
            if (res.ok) {
            setStats(data);
            } else {
            console.error("Gagal mengambil statistik:", data.message);
            }
        } catch (err) {
            console.error("Terjadi kesalahan:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
        <div className="flex min-h-screen items-center justify-center text-white">
            Memuat dashboard...
        </div>
        );
    }

    return (
        <div className="space-y-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Kategori" value={stats.totalCategory} color="from-amber-500 to-yellow-600" />
            <StatCard label="Menu" value={stats.totalMenu} color="from-green-500 to-green-700" />
            <StatCard label="Order" value={stats.totalOrder} color="from-blue-500 to-blue-700" />
            <StatCard label="User" value={stats.totalUser} color="from-pink-500 to-red-500" />
        </div>

        {/* Kamu bisa tambah grafik atau tabel ringkasan di bawah sini */}
        </div>
    );
}

function StatCard({
    label,
    value,
    color,
    }: {
    label: string;
    value: number;
    color: string;
    }) {
    return (
        <div
        className={`p-6 rounded-xl shadow-lg text-center text-white bg-gradient-to-br ${color} bg-opacity-80 backdrop-blur-md`}
        >
        <p className="text-lg font-semibold mb-2">{label}</p>
        <p className="text-4xl font-bold">{value}</p>
        </div>
    );
}