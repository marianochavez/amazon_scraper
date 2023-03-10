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
      <body className="flex bg-[#F7FBFF] h-full">
        <ClientProvider>
          <Sidebar />
          <main className="py-10 px-2 md:px-10 max-w-7xl w-full mx-auto h-full overflow-hidden">
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
