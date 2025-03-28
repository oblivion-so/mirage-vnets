"use client";
import { removeSession } from "@/actions/auth-actions";
import { userSession } from "@/hooks/user-session";
import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";

const Main = ({ session }: { session: string | null }): any => {

    const userSessionId = userSession(session);

    const router = useRouter();

    const auth = getAuth();

    const user = auth.currentUser;

    const handleSignOut = async () => {

        await signOut();

        await removeSession();

    };

    if (userSessionId === null) {

        return router.push("/login");

    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 h-screen">
            <h1 className="text-4xl font-semibold">
                {user?.displayName}
            </h1>

            <button onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    )
};

export default Main;