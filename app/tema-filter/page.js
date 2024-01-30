// Component
import Navbars from "../component/navbars"
import SectionOne from "./section1"
import SectionTwo from "./section2"
import SectionThree from "./section3"
import Footer from '../component/footer'


// import Footer from './component/footer'

// Font
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function TemaFilter() {
  return (
    <main className={`${jakartaSans.className}`}>
      <Navbars />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  )
}
