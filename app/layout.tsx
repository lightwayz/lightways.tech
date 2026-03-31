import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
import Cursor from "@/app/components/Cursor";
import CustomCursor from "@/app/components/CustomCursor";
import PageIntro from "@/app/components/PageIntro";

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
            <PageIntro />
            <Navbar />

            {children}

            <Footer />
        </SmoothScroll>
        </body>
        </html>
    );
}