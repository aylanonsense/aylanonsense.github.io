import SiteHeader from "@/app/components/SiteHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader compact={true} />
      <main>
        {children}
      </main>
    </>
  )
}
