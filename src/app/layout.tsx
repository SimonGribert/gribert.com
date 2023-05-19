import './globals.css'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ weight: ['400', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Gribert',
  description: 'Web Development, Industry Sales and Logistics',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className={archivo.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
