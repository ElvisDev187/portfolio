import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Header from "./header";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"],style: "normal", weight: ["100","200","300","700","800","900"] });

export const metadata: Metadata = {
  title: "ElvisDev",
  description: "Let's know more about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen",poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
