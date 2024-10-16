import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

const App = () =>{
  return(
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
    </main>
  )
}

export default App