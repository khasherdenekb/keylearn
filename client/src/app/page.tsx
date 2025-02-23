import Landing from "./(main)/landing/page"
import { Header } from "@/components/layout/nav/header"

const Home = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-10">
      <Header />
      <main className="overflow-hidden py-32">
        <Landing />
      </main>
    </div>
  )
}

export default Home
