import Hero from '../sections/Hero'
import Highlights from '../sections/Highlights'
import Roadmap from '../sections/Roadmap'
import Changelog from '../sections/Changelog'
import Trends from '../sections/Trends'
import Community from '../sections/Community'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen px-4 md:px-0 text-white font-mono">
      <Hero />
      <Highlights />
      <Roadmap />
      <Trends />
      <Changelog />
      <Community />
    </main>
  )
}
