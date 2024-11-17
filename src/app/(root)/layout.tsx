import MobileNav from "@/components/sidebar/MobileNav";
import Sidebar from "@/components/sidebar/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser();
  console.log("user:", user);

  if (!user) redirect("/login");

  return (
    <main className="flex">
      <Sidebar user={user} />

      <div className="flex-1">
        <MobileNav user={user} />
        <div className="">{children}</div>
      </div>
    </main>
  );
}
