import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import GetSegments from "./components/GetSegments";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const menu = [
  { href: "/", label: "Home" },
  { href: "/baqir", label: "Baqir" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Root Layout rendered");
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <header className="border border-green-400">
          <nav>
            <ul>
              {menu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* <GetSegments /> */}

        {children}
      </body>
    </html>
  );
}
