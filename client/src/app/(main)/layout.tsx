import { Header } from "@/components/layout/nav/header"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-10">
      <Header />
      <main>{children}</main>
    </div>
  )
}
