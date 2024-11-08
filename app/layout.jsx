import localFont from "next/font/local";
import {
  ClerkProvider,
  SignedOut,
  SignInButton,
} from '@clerk/nextjs';
import ConditionalHeader from '@/components/ConditionalHeader';
import './globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DebateVerse",
  description: "A platform for debating and discussing ideas.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ConditionalHeader />
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}