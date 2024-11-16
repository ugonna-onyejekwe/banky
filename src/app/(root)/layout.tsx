import MobileNav from "@/components/sidebar/MobileNav";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1">
        <MobileNav />
        <div className="">{children}</div>
      </div>
    </main>
  );
}
