import Logo from "@/Components/Logo";
import { ReactNode } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <div className="p-12">
                <Logo />
            </div>

            {children}
        </>
    )
};