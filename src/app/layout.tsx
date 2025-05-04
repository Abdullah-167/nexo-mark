import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar";
import ProgressBar from "./Components/Common/Progressbar";
import Footer from "./Components/Layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={poppins.className}>
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}