"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

import ".././globals.css";
import { DisclosureProvider } from "@/contexts/Disclosure";
import { PageLayoutProvider } from "@/contexts/PageLayout";
import { ModalsProvider } from "@/contexts/Modals";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function BlogsLayout(props) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PageLayoutProvider>
          <ModalsProvider>
            <Page {...props} />
          </ModalsProvider>
        </PageLayoutProvider>
      </body>
    </html>
  );
}

const Page = ({ children }) => {
  return (
    <>
      <main className="relative flex h-auto pt-5 gap-4 xl:gap-6 justify-center mb-6 items-start flex-wrap max-w-container m-auto">
        <Sidebar />
        <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] 2xl:w-[calc(100%-19.7rem)]">
          <DisclosureProvider>
            <div className="mt-5">{children}</div>
          </DisclosureProvider>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};
