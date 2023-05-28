import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      <Navbar />
    </main>
  )
}
