import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Sidebar} from '@/components'
import { CustomNavbar } from '../components/CustomNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProIngeniería',
  description: 'Proyecto para ProIngeniería',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          <div className='w-screen h-screen overflow-x-hidden'>
            <CustomNavbar/>
             {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
