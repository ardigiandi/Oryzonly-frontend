import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800',]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </div>
  )
}
