"use client";

import Link from "next/link";
import {
    Home,
    List,
    Coffee,
    ClipboardList,
    Users,
    LogOut,
    History,
    UserPlus,
} from "lucide-react";

export default function Sidebar({ role }: { role: "admin" | "kasir" }) {
    const menus =
        role === "admin"
        ? [
            { name: "Dashboard", href: "/admin", icon: Home },
            { name: "Category", href: "/admin/category", icon: List },
            { name: "Menu", href: "/admin/menu", icon: Coffee },
            { name: "Order", href: "/admin/order", icon: ClipboardList },
            { name: "Riwayat", href: "/admin/riwayat", icon: History },
            { name: "Member", href: "/admin/member", icon: UserPlus },
            { name: "User", href: "/admin/user", icon: Users },
            ]
        : [
            { name: "Dashboard", href: "/kasir", icon: Home },
            { name: "Order", href: "/kasir/order", icon: ClipboardList },
            { name: "Riwayat", href: "/kasir/riwayat", icon: History },
            { name: "Member", href: "/kasir/member", icon: UserPlus },
            ];

    const logout = { name: "Logout", href: "/", icon: LogOut };
    const LogoutIcon = logout.icon;

    return (
        <aside className="w-64 h-screen p-4 bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-2xl flex flex-col">
        <h2 className="text-2xl font-semibold text-white mb-4 capitalize tracking-wide">
            {role}
        </h2>

        {/* Menu utama */}
        <nav className="flex flex-col space-y-2">
            {menus.map((m) => {
            const Icon = m.icon;
            return (
                <Link
                key={m.href}
                href={m.href}
                className="text-white/80 text-lg font-medium tracking-wide px-4 py-2 rounded-lg hover:bg-white/20 hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-300 ease-in-out flex items-center gap-3"
                >
                <Icon size={20} className="opacity-80" />
                {m.name}
                </Link>
            );
            })}
        </nav>

        {/* Spacer biar logout ke bawah */}
        <div className="mt-auto">
            <Link
            href={logout.href}
            className="bg-red-500 text-white text-lg font-medium tracking-wide px-4 py-2 rounded-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 ease-in-out flex items-center gap-3"
            >
            <LogoutIcon size={20} className="opacity-80" />
            {logout.name}
            </Link>
        </div>
        </aside>
    );
}