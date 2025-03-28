"use client";
import { signInWithGithub, signInWithGoogle } from "@/lib/firebase/auth";
import { createSession } from "@/actions/auth-actions";
import { myFontBold, myFontMedium } from "@/lib/font";
import Link from "next/link";

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
        <div className="flex justify-center items-center mt-12 mb-22">
            <div className="gradient-border border border-[#d461fa64] py-9 px-7 w-full max-w-5xl">
                <div className="flex justify-center items-center flex-col">
                    <h1 className={`${myFontMedium} text-3xl font-bold text-white text-center`}>
                        Login to your Account
                    </h1>

                    <div className="flex justify-center w-full gap-8 max-w-2xl py-10 px-4">
                        <div className="flex flex-col justify-center items-center gap-6 w-full">
                            <input
                                className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                                placeholder="Email"
                                type="email"
                                name="email"
                            />

                            <input
                                className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                                placeholder="Password"
                                type="password"
                                name="password"
                            />

                            <button className={`${myFontBold.className} font-bold text-[18px] py-3 border border-[#d461fa64] cursor-pointer rounded-full w-full`}>
                                Login to your Account
                            </button>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-6 w-full">
                            <button
                                className="flex items-center w-full gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer"
                                onClick={handleSignInGoogle}
                            >
                                <img src="./google.png" alt="google icon" />

                                <span className="text-[16px]">
                                    Sign in with Google
                                </span>
                            </button>

                            <button
                                className="flex items-center w-full gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer"
                                onClick={handleSignInGithub}
                            >
                                <img src="./github.png" alt="github icon" />

                                <span className="text-[16px]">
                                    Sign in with Github
                                </span>
                            </button>

                            <button className="flex items-center w-full gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer">
                                <img src="./apple.png" alt="apple icon" />

                                <span className="text-[16px]">
                                    Sign in with Apple
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3 pt-6 pb-3">
                        <h2 className="text-white text-xl font-medium">
                            {`Dont have an account?`}
                        </h2>

                        <Link
                            className="text-[#D461FA] font-bold text-xl"
                            href="/register"
                        >
                            Create One
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;