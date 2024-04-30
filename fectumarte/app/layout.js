import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-center py-4 bg-gray-200">
          <p className="text-sm text-gray-600">
            Fectumarte 2024 © All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
