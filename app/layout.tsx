import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import CustomCursor from "@/components/CustomCursor";

import * as React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
        <SmoothScroll>
            <CustomCursor />
            <Cursor />
            <Navbar />

            {children}

            <Footer />
        </SmoothScroll>
        </body>
        </html>
    );
}