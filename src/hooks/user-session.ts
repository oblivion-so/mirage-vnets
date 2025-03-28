import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";

export function userSession(InitSession: string | null) {

    const [userUid, setUserUid] = useState<string | null>(InitSession);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(async (authUser) => {

            if (authUser) {

                setUserUid(authUser.uid);

            } else {

                setUserUid(null);

            }

        });

        return () => unsubscribe();

    }, []);

    return userUid;

};