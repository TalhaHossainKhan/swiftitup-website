import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import KeyFeatures from "./components/KeyFeatures"

const App = () =>{
  return(
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <Project />
      <KeyFeatures />
    </main>
  )
}

export default App