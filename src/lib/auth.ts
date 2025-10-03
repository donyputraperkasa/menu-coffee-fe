export const getToken = () => {
    return localStorage.getItem("token");
};

export const getProfile = async () => {
    const token = getToken();
    if (!token) throw new Error("No token");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Unauthorized");
    return res.json();
};