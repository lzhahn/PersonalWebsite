"use client";

import React from 'react';
import { Theme } from "@radix-ui/themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme appearance="inherit" accentColor="blue" grayColor="slate" scaling="100%" radius="medium">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </Theme>
  );
}
