"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MenuPage() {
    const [menus, setMenus] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const fetchMenus = async () => {
        try {
            const res = await fetch(`${API_URL}/menu`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            const data = await res.json();
            setMenus(data);
        } catch (err) {
            console.error("Gagal mengambil menu:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchMenus();
    }, []);

    const handleDelete = async (id: number) => {
        const token = localStorage.getItem("token");
        if (!confirm("Yakin ingin menghapus menu ini?")) return;

        try {
        const res = await fetch(`${API_URL}/menu/${id}`, {
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            setMenus((prev) => prev.filter((m) => m.id !== id));
        }
        } catch (err) {
        console.error(err);
        }
    };

    if (loading) {
        return (
        <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-[#3e2723] to-[#4e342e]">
            Loading menu...
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#3e2723] to-[#4e342e] text-white p-8">
        <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Daftar Menu Coffee</h1>
            <Link
                href="/admin/menu/create"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md text-white font-semibold shadow-lg"
            >
                + Tambah Menu
            </Link>
            </div>

            {menus.length === 0 ? (
            <div className="text-center py-10 text-gray-300">
                Belum ada menu tersedia ☕
            </div>
            ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menus.map((menu) => (
                <div
                    key={menu.id}
                    className="backdrop-blur-md bg-white/10 rounded-lg p-4 shadow-lg border border-white/20"
                >
                    <div className="mb-3">
                    <h2 className="text-xl font-semibold">{menu.name}</h2>
                    <p className="text-sm text-gray-300">{menu.category?.name}</p>
                    </div>
                    <p className="text-lg font-bold mb-4">
                    Rp {menu.price?.toLocaleString("id-ID")}
                    </p>
                    <div className="flex justify-between">
                    <Link
                        href={`/admin/menu/edit/${menu.id}`}
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded-md text-sm font-medium"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => handleDelete(menu.id)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-md text-sm font-medium"
                    >
                        Hapus
                    </button>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>
    );
}