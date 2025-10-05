"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function KasirLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "KASIR") {
        router.replace("/kasir");
        } else {
        setIsAuthorized(true);
        }
    }, [router]);

    if (!isAuthorized) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-[#3e2723] text-white">
            Loading...
        </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#3e2723] to-[#6d4c41] text-white">
            <Navbar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            <Footer />
        </div>
    );
}