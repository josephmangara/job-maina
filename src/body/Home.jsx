import Experience from "./Experience";
import Skills from "./Skills";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


function Home() {

  return (
    <div>
      <section className="relative bg-gray-900 text-white py-48 px-6 pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1
            className="hero-typing text-3xl md:text-5xl font-bold mb-6 mx-auto"
          >
            I am Job Maina
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            A passionate journalist committed to telling compelling, accurate, and deeply human stories.  
            I believe in the power of truth, transparency, and impactful storytelling that sparks conversation  
            and helps shape an informed society.
          </p>
          <p className="text-md md:text-lg mb-10">Explore my portfolio and recent work.</p>
          <a
            href="#stories"
            className="inline-block px-6 py-3 bg-amber-700 hover:bg-amber-800 rounded-lg font-semibold transition"
          >
            View My Work
          </a>
        </div>
      </section>

      <section id="about" className="container mx-auto mb-6 lg:mb-12">
        <h2  className="text-xl md:text-2xl font-semibold text-center p-6">About</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-10 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1711439858551-c96a3c310075?q=80&w=687&auto=format&fit=crop" 
            alt="person adjusting a camera on the street" 
            className="rounded-xl max-w-96"
          />
          <p className="flex items-center max-w-7/12">I am an ambitious go-getter who ensures the completion of tasks within the required time, adhering to high-quality standards. Well-balanced in emotional control when dealing with colleagues, cooperative in nature, and a proven team player. My primary goal is to add value to the workplace using the skills acquired in my career development journey. I am committed to serving diligently, continuously improving my educational training, and acquiring technical skills for personal growth and better service to organizations.</p>
        </div>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education" className="container mx-auto mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-center p-6">Education</h2>
        <div className="relative border-l-2 border-gray-300 dark:border-gray-600 ml-6">
          
          <div className="mb-8 ml-6 relative">
            <span className="absolute -left-6 top-1.5 w-3 h-3 bg-amber-700 rounded-full border border-white dark:border-gray-900"></span>
            <h3 className="text-lg md:text-xl font-semibold">The Technical University of Kenya (School of Creative Arts and Media)</h3>
            <p className="text-sm text-gray-600 mb-1">Aug 2017 - Dec 2021</p>
            <p className="font-medium">Pursued a Bachelor's Degree in Journalism and Mass Communication.</p>
          </div>

          <div className="mb-8 ml-6 relative">
            <span className="absolute -left-6 top-1.5 w-3 h-3 bg-amber-700 rounded-full border border-white dark:border-gray-900"></span>
            <h3 className="text-lg md:text-xl font-semibold">Ndururumo High School</h3>
            <p className="text-sm text-gray-600 mb-1">2013 - 2016</p>
            <p className="font-medium">Attained the Kenya Certificate of Secondary Education [KCSE] with a Grade B plain.</p>
          </div>

          <div className="mb-8 ml-6 relative">
            <span className="absolute -left-6 top-1.5 w-3 h-3 bg-amber-700 rounded-full border border-white dark:border-gray-900"></span>
            <h3 className="text-lg md:text-xl font-semibold">Kahawa Primary School</h3>
            <p className="text-sm text-gray-600 mb-1">2005 - 2012</p>
            <p className="font-medium">Obtained the Kenya Certificate of Primary Education [KCPE].</p>
          </div>

        </div>
      </section>

      <section id="interests" className="container mx-auto mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-center p-6">Interests & Hobbies</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="md:text-base px-4 py-2 bg-amber-100 text-amber-800 rounded-full">Languages & Accents</span>
          <span className="md:text-lg px-4 py-2 bg-orange-100 text-orange-800 rounded-full">Geopolitics</span>
          <span className="md:text-base px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Comedy</span>
          <span className="md:text-xl px-4 py-2 bg-green-100 text-green-800 rounded-full">Leadership</span>
          <span className="md:text-lg px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Swimming</span>
        </div>
      </section>


      <section className="container mx-auto text-center mb-12">
        <h2 className="text-xl md:text-2xl font-semibold p-6">Contact info</h2>
        <div className="border border-amber-500 rounded-lg p-8 mx-auto">
          <p className="mb-4">Let's connect and tell stories together.</p>
          <p>Reach out to me via <a href="mailto:job.m.wambugu@gmail.com" className="underline font-bold text-blue-500" target="_blank">email</a> for more information or collaboration opportunities.
          </p>
          <h3 className="font-semibold text-lg py-4 ">Socials</h3>
          <div className="flex gap-12">
            <a href="https://www.linkedin.com/" className="text-3xl" target="_blank"><CiLinkedin /></a>
            <a href="https://x.com/" className="text-3xl" target="_blank"><FaXTwitter /></a>
            <a href="https://www.instagram.com/" className="text-3xl" target="_blank"><FaInstagram /></a>
          </div>
        </div>        
      </section>
      
    </div>
)
}

export default Home;