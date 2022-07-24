import Link from 'next/link'
import { ReactNode } from 'react'
import CookieConsent from '../banners/CookieConsent'

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-5xl px-2 mx-auto md:px-4">{children}</div>
)

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center border-b border-gray-200 h-14">
        <Container>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className="text-sm font-medium text-center capitalize">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <main className="flex-grow">
        <Container>{children}</Container>
      </main>
      <footer className="py-5 border-t border-gray-200">
        <Container>
          <nav className="my-5">
            <ul>
              <li>
                <Link href="/privacy-policy">
                  <a className="text-sm font-medium text-center capitalize">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
        <Container>
          <p className="text-sm font-medium text-center capitalize">
            copyright © {new Date().getFullYear()} all rights reserved
          </p>
        </Container>
      </footer>
      <CookieConsent />
    </div>
  )
}

export default PublicLayout
