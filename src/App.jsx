import { BrowserRouter } from "react-router"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <BrowserRouter>
        <Nav />
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
    </BrowserRouter>
  )
}

export default App