import Experience from "./Experience";
import Skills from "./Skills";


function Home() {

  return (
    <div>
      <section className="hero-section">
        <h1 className="text-2xl p-8">I am Job Maina</h1>
        <p></p>
        <p>Hi, explore my portfolio.</p>
      </section>

      <section>
        <h2>About</h2>
        <p>Stuff</p>
      </section>

      <Skills />
      <Experience />

      <section>
        <h2>Education</h2>
      </section>

      <section>
        <h2>Interests & Hobbies</h2>
      </section>
      
    </div>
)
}

export default Home;