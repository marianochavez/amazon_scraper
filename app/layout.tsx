import ClientProvider from "@/components/ClientProvider";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Amazon Web Scraper",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen">
        <ClientProvider>
          <Sidebar />
          <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
