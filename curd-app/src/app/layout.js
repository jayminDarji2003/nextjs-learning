import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "curd app",
  description: "a fully functional curd app developed using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className bg-gradient-to-r from-gray-500 via-blue-500 to-orange-500`}>
        <div className="max-w-3xl mx-auto p-4 ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
