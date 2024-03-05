// Component
import SectionOne from "./home/section1";
import SectionTwo from "./home/section2";
import SectionThree from "./home/section3";
import SectionFour from "./home/section4";
import SectionFive from "./home/section5";
import SectionSeven from "./home/section7";
import SectionSix from "./home/section6";
import SectionEight from "./home/section8";
import SectionNine from "./home/section9";



// Font
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${jakartaSans.className}`}>
      <SectionOne />
      <SectionTwo />
      <SectionEight />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionNine />
      <SectionSeven />
    </main>
  );
}
