import { auth } from "./config";
import {
    type User,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged as _onAuthStateChanged,
    GithubAuthProvider
} from "firebase/auth";

export function onAuthStateChanged(callback: (authUser: User | null) => void) {

    return _onAuthStateChanged(auth, callback);

};

export async function signInWithGoogle() {

    const provider = new GoogleAuthProvider();

    try {

        const result = await signInWithPopup(auth, provider);

        if (!result || !result.user) {

            throw new Error("Google Sign In Failed");

        }

        return result.user.uid;

    } catch (error) {

        console.error("Error Signing In With Google", error);

    }

};

export async function signInWithGithub() {

    const provider = new GithubAuthProvider();

    try {

        const result = await signInWithPopup(auth, provider);

        if (!result || !result.user) {

            throw new Error("GitHub Sign In Failed");

        }

        return result.user.uid;

    } catch (error) {

        console.error("Error Signing In With GitHub", error);

        throw error;

    }

};

export async function signOut() {

    try {

        await auth.signOut();

    } catch (error) {

        console.error("Error Signing Out With Google", error);

    }

};