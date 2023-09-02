'use client';
import { CustomNavbar } from "@/components"


export default function ExecutorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className='w-screen h-screen
        overflow-x-hidden
    '>
        <CustomNavbar />
        {children}
    </div>
}