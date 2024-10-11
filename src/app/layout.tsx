
import "@/styles/globals.scss"
import type { Metadata } from "next"
import ContainRedirectText from "./(layout)/ContainRedirectText"
import { monomaniacOne } from "./fonts"
import SocialNetworks from "./(layout)/socialNetworks"


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