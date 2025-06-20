import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'
import ClickTracker from './ClickTracker'
import ChatbaseWidget from "./ChatbaseWidget";

export const metadata: Metadata = {
  title: 'Sucka Punch',
  description: 'Premium Apparel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClickTracker />
           <ChatbaseWidget />
     
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
