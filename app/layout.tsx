import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "../lib/smoothScroll";
import Cursor from "./components/Cursor";
import * as React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="{inter.className}bg-black text-white">
        <SmoothScroll />
        <Cursor />
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}