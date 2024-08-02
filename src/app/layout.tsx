import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  afterSignOutUrl={'sign-in'}>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton signInUrl='sign-in'/>
            </SignedIn>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}