import Footer from "@/components/Footer"
import Header from "@/components/header"

export const metadata = {
  title: 'Next.js basics',
  description: 'Learning Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-200">
        <header >
          <Header />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
