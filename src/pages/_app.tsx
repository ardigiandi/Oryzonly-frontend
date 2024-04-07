import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/fragments/Navbar";
import { useRouter } from "next/router";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800',]
})

const disableNavbar = ['auth', 'mentor']

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  const { pathname } = useRouter()
  return (
    <SessionProvider session={session}>
      <div className={manrope.className}>
         {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
          <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
