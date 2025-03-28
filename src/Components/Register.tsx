"use client";
import { signInWithGithub, signInWithGoogle } from "@/lib/firebase/auth";
import { myFontBold, myFontMedium } from "@/lib/font";
import { createSession } from "@/actions/auth-actions";
import Link from "next/link";

const Register = () => {

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
                        Create a Free Account
                    </h1>

                    <p className="py-3 text-[#c5baba] text-[20px]">
                        Join Mirage. The full-stack infrastructure for building Web3 solutions
                    </p>

                    <div className="flex justify-around py-3 gap-5">
                        <button
                            className="flex items-center gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer"
                            onClick={handleSignInGoogle}
                        >
                            <img src="./google.png" alt="google icon" />

                            <span className="text-[16px]">
                                Google
                            </span>
                        </button>

                        <button
                            className="flex items-center gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer"
                            onClick={handleSignInGithub}
                        >
                            <img src="./github.png" alt="github icon" />

                            <span className="text-[16px]">
                                Github
                            </span>
                        </button>

                        <button className="flex items-center gap-3 py-3 px-14 border border-[#d461fa64] rounded-md cursor-pointer">
                            <img src="./apple.png" alt="apple icon" />

                            <span className="text-[16px]">
                                Apple
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center w-[90%] py-2 px-32">
                        <div className="flex-1 h-[2px] bg-[#c9c1c1]" />

                        <p className="flex-shrink-0 text-[#c5baba] font-medium leading-[104%] tracking-[-0.02em] px-6">
                            OR
                        </p>

                        <div className="flex-1 h-[2px] bg-[#c9c1c1]" />
                    </div>

                    <div className="flex justify-center items-center gap-6 w-full max-w-2xl px-6 pt-4 pb-3">
                        <input
                            className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                            placeholder="Email"
                            type="email"
                            name="email"
                        />

                        <input
                            className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                            placeholder="Username"
                            type="text"
                            name="username"
                        />
                    </div>

                    <div className="flex justify-center items-center gap-6 w-full max-w-2xl px-6 pb-4 pt-3">
                        <input
                            className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                            placeholder="Password"
                            type="password"
                            name="password"
                        />

                        <input
                            className="border border-[#c9c1c1] w-full rounded-full py-3 px-7"
                            placeholder="Repeat Password"
                            type="password"
                            name="reapeatPassword"
                        />
                    </div>

                    <div className="flex justify-center items-center gap-3 py-3">
                        <input type="checkbox" />

                        <p className="text-[#c5baba]">
                            I agree to mirage terms and conditions
                        </p>
                    </div>

                    <button className={`${myFontBold.className} font-bold text-[18px] my-4 py-3 border border-[#d461fa64] cursor-pointer rounded-full w-full max-w-xl`}>
                        Create Account
                    </button>

                    <div className="flex justify-center items-center gap-3 pt-6 pb-3">
                        <h2 className="text-white text-xl font-medium">
                            Already have an account?
                        </h2>

                        <Link
                            className="text-[#D461FA] font-bold text-xl"
                            href="/login"
                        >
                            Login Instead
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;