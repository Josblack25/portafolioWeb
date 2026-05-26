import Navbar from "../component/navBar/NavBar"
import Hero from "../component/Hero"
import AboutMe from "../component/AboutMe"
import Projects from "../component/Projects"
import Carrer from "../component/Carrer"
import Contact from "../component/Contact"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">

      <main className="flex w-full flex-col items-center min-h-screen ">

        {/* navBar */}
        <Navbar />

        {/* hero section */}
        <section>
          <Hero />
        </section>

        {/* sobre mi */}
        <section>
          <AboutMe />
        </section>

        {/* projects section */}
        <section>
          <Projects />
        </section>

        {/* education section */}
        <section>
          <Carrer />
        </section>

        {/* contact section */}
        <section>
          <Contact />
        </section>

        {/* footer */}
        <div></div>
      </main>
    </div>
  );
}
