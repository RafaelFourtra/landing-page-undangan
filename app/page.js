import Image from 'next/image'

// Component
import Navbars from "./component/navbars"
import SectionOne from "./home/section1"
import SectionTwo from "./home/section2"


// Font
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`${jakartaSans.className}`}>
      <Navbars />
      <SectionOne />
      <SectionTwo />
    </main>
  )
}
