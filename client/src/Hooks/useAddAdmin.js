import { useState } from "react";
import toast from "react-hot-toast";

const useAddAdmin = () => {
    const [loading, setLoading] = useState(false);

    const addAdmin = async ({ firstName, lastName, username, email, password, confirmPassword , role,verified }) => {
        const success = handleInputErrors({ firstName, lastName, username, email, password, confirmPassword ,role,verified });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword ,role,verified }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            toast.success('New Admin is Added!')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, addAdmin };
};

export default useAddAdmin;

function handleInputErrors({ firstName, lastName, username, email, password, confirmPassword ,role }) {
    if (!firstName || !lastName || !username || !email || !password || !confirmPassword || !role) {
        toast.error("Please fill in all fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}
