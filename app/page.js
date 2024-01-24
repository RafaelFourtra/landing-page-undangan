import Image from 'next/image'
import { Oswald } from 'next/font/google'

// Component
import Navbars from "./component/navbars"

const inter = Oswald({ 
  subsets: ['latin'], 
  display: 'swap',
})

export default function Home() {
  return (
    <main>
      <Navbars />
    </main>
  )
}
