'use client';
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { QueryClientProvider } from "react-query";
import Header from '../components/Header';
import AppProvider from "@/contexts/AppProvider";
import queryClient from "@/services/queryClient";
import '../styles/GlobalStyles.css';

const saira: NextFont = Saira({ subsets: ["latin"], weight: ['400']});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>): JSX.Element {
  return (
    <>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="pt-br">
            <body className={saira.className}>
              <Header/>
              {children}
            </body>
          </html>
      </QueryClientProvider>
    </AppProvider>
    </>
  );
}