import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import KeyFeatures from "./components/KeyFeatures"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () =>{
  return(
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <Project />
      <KeyFeatures />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App