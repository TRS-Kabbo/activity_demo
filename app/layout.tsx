import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Sidebar } from "@/components/navigation/sidebar";

export const metadata: Metadata = {
  title: "DCC IT Club - Leaderboard",
  description: "Track programming progress for Dhaka Commerce College Science & IT Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
