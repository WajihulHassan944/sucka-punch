import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from './context/AuthContext'

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
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
