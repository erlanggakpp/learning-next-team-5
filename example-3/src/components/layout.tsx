import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="w-full h-10 bg-slate-500"></div>
            {children}
            <div className="w-full h-10 bg-red-500"></div>
        </>
    );
}
