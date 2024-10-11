import type { Metadata } from "next"
import ContainRedirectText from "@/components/ContainRedirectText"
import "@/styles/globals.scss"
import { monomaniacOne } from "./fonts"
import SocialNetworks from "@/components/socialNetworks"


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
        <ContainRedirectText />
        {children}
        <SocialNetworks/>
      </body>
    </html>
  )
}