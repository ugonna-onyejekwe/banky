import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      <div className="flex-1 bg-primary-2">{children}</div>

      <div className="h-screen max-[900px]:hidden sticky flex-1 top-0">
        <div className="flex items-center justify-center size-full">
          <Image src="/auth-img.jpg" alt="image" height={600} width={600} />
        </div>
      </div>
    </main>
  );
}
