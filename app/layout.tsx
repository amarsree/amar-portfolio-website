import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Amar Sree Talari - Fullstack Developer & DevOps Engineer",
  description: "Portfolio of Amar Sree Talari - Fullstack Developer and DevOps Engineer with expertise in web development, IoT, and system automation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-TQ98T8DBXM" />
        </ThemeProvider>
      </body>
    </html>
  )
}

