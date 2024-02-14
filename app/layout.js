'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers";
import FloatingButton from "./component/floatingButton"
import Navbar from "./component/navbars"
import Footer from "./component/footer"
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar = pathname === '/checkout';
  const hideFooter = pathname === '/checkout';
  const hideFloatButton = pathname === '/checkout';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
          {!hideNavbar && <Navbar />}
          {!hideFloatButton && <FloatingButton />}
          {children}
          {!hideFooter && <Footer />}
        </Providers>
      </body>
    </html>
  )
}