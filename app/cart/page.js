// Component
import SectionOne from "./section1"

// Font
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export default function Cart() {
    return (
        <main className={`${jakartaSans.className}`}>
            <SectionOne />
        </main>
    )
}
