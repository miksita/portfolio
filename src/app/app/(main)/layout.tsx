import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      {/* <link rel="icon" type="image/svg+xml" href="/favicon.ico" /> */}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
