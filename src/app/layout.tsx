'use client'

import type { Metadata } from "next";
import { Saira, Saira_Stencil_One } from "next/font/google";
import Header from '../components/Header';
import '../styles/GlobalStyles.css'
import { QueryClientProvider } from "react-query";
import queryClient from "@/services/queryClient";
import AppProvider from "@/contexts/AppProvider";

const saira = Saira({ subsets: ["latin"], weight: ['400']});
export const SairaStencilOne = Saira_Stencil_One({ subsets: ["latin"], weight: ['400']});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
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