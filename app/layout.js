import { Poppins } from 'next/font/google'
import '@/assets/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Ventura',
  description: 'Booking app using Next, Appwrite and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='mx-auto max-w-7xl px-4 py-6'>
          {children}
        </main>
      </body>
    </html>
  )
}