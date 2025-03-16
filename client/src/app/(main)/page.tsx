import { Header } from "@/components/layout/nav/header"
import Landing from "./landing/page"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-10">
      <Header />
      <main className="overflow-hidden py-32">
        <Landing />
      </main>
    </div>
  )
}
