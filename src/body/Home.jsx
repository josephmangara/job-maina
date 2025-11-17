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
        <p>I am an ambitious go-getter who ensures the completion of tasks within the required time, adhering to high-quality standards. Well-balanced in emotional control when dealing with colleagues, cooperative in nature, and a proven team player. My primary goal is to add value to the workplace using the skills acquired in my career development journey. I am committed to serving diligently, continuously improving my educational training, and acquiring technical skills for personal growth and better service to organizations.</p>
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