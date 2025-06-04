import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'
import ClickTracker from './ClickTracker'

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
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
