import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { Session } from "inspector";
import { pages } from "next/dist/build/templates/app-page";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800',]
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={manrope.className}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </div>
    </SessionProvider>
  )
}
