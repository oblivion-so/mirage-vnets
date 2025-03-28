import { ReactNode } from "react";
import { myFontBlack } from "@/lib/font";

export default function AuthLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <p className={`${myFontBlack} font-bold text-[32px] main-heading cursor-pointer py-5 px-8`}>
                mirage.
            </p>

            {children}
        </>
    )
};