'use client';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Sidebar } from '@/components'
import { CustomNavbar } from '@/components'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const showSideBar = pathname !== '/login' && pathname !== '/signup';

  return (
    <html lang="en">
      <body>
        <Providers>
          {showSideBar && <Sidebar />}
          <div className='w-screen h-screen overflow-x-hidden'>
            {showSideBar && <CustomNavbar />}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
