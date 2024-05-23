import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
  </div>
    );
  }