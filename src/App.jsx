import { BrowserRouter } from "react-router"
import StarCanvas from "../src/components/StarCanvas"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Project from './components/Project'
import About from "./components/About"

function App() {

  return (
    <BrowserRouter>
      <StarCanvas/>
        <Nav />
        <Hero/>
        <Project/>
        <About/>
    </BrowserRouter>
  )
}

export default App