
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web-developer & Web-design",
  description: "Made site for You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-2 w-7xl mx-auto">
      <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
