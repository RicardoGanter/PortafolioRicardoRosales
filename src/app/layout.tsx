
import "@/styles/globals.scss"
import type { Metadata } from "next"
import Layout from "./(layout)/layout"
import { monomaniacOne } from "./fonts"
import SocialNetworks from "./(layout)/components/socialNetworks"


export const metadata: Metadata = {
  title: "Portafolio Ricardo Rosales",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={monomaniacOne.className}>
        <Layout />
        {children}
        <SocialNetworks/>
      </body>
    </html>
  )
}