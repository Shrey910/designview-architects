import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export const metadata = {
  title: 'Luxury Interior Design Studio',
  description: 'Premium interior design services for discerning clients',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=TASA+Explorer:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-neutral-100 font-sans">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}