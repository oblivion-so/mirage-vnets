"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function createSession(uid: string) {

    (await cookies()).set("session", uid, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        path: "/"
    });

    redirect("/");

};

export async function removeSession() {

    (await cookies()).delete("session");

    redirect("/login");

};