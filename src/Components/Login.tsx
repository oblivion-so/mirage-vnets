"use client";
import { signInWithGithub, signInWithGoogle } from "@/lib/firebase/auth";
import { createSession } from "@/actions/auth-actions";
import { myFontMedium } from "@/lib/font";

const Login = () => {

    const handleSignInGoogle = async () => {

        const userUid = await signInWithGoogle();

        if (userUid) {

            await createSession(userUid);

        }

    };

    const handleSignInGithub = async () => {

        const userUid = await signInWithGithub();

        if (userUid) {

            await createSession(userUid);

        }

    };

    return (
        <div className="flex justify-center items-center my-12 flex-col gap-12">
            <h1 className={`${myFontMedium} text-3xl font-bold text-white`}>
                Login to your account
            </h1>

            <button onClick={handleSignInGoogle}>
                Sign In With Google
            </button>

            <button onClick={handleSignInGithub}>
                Sign In With Github
            </button>
        </div>
    )
};

export default Login;