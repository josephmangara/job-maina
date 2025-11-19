import Experience from "./Experience";
import Skills from "./Skills";


function Home() {

  return (
    <div>
      <section className="relative bg-gray-900 text-white py-48 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop')"
          }}
        ></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            I am Job Maina
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-6">
            A passionate journalist committed to telling compelling, accurate, and deeply human stories.  
            I believe in the power of truth, transparency, and impactful storytelling that sparks conversation  
            and helps shape an informed society.
          </p>

          <p className="text-md md:text-lg mb-10">Explore my portfolio and recent work.</p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
          >
            View My Work
          </a>
        </div>
      </section>

      <section className="container mx-auto mb-6">
        <h2  className="text-xl md:text-2xl  font-semibold p-6">About</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-10">
          <img 
            src="https://images.unsplash.com/photo-1711439858551-c96a3c310075?q=80&w=687&auto=format&fit=crop" 
            alt="person adjusting a camera on the street" 
            className="rounded-xl max-w-96"
          />
          <p className="flex items-center max-w-7/12">I am an ambitious go-getter who ensures the completion of tasks within the required time, adhering to high-quality standards. Well-balanced in emotional control when dealing with colleagues, cooperative in nature, and a proven team player. My primary goal is to add value to the workplace using the skills acquired in my career development journey. I am committed to serving diligently, continuously improving my educational training, and acquiring technical skills for personal growth and better service to organizations.</p>
        </div>
      </section>

      <Skills />
      <Experience />

      <section className="container mx-auto mb-6">
        <h2 className="text-xl md:text-2xl  font-semibold p-6">Education</h2>
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold">
            The Technical University of Kenya (School of Creative Arts and Media)
          </h3>
          <p className="text-sm text-gray-600 mb-2">Aug 2017 - Dec 2021</p>
          <p className="font-medium">
            Pursued a Bachelor's Degree in Journalism and Mass Communication.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold">Ndururumo High School</h3>
          <p className="text-sm text-gray-600 mb-2">2013 - 2016</p>
          <p className="font-medium">
            Attained the Kenya Certificate of Secondary Education [KCSE] with a Grade B plain.
          </p>
        </div>

        <div className="">
          <h3 className="text-lg md:text-xl font-semibold">Kahawa Primary School</h3>
          <p className="text-sm text-gray-600 mb-2">2005 - 2012</p>
          <p className="font-medium">
            Obtained the Kenya Certificate of Primary Education [KCPE].
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-6">
        <h2 className="text-xl md:text-2xl font-semibold p-6">Interests & Hobbies</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Learning new languages and accents</li>
          <li>Following local and geopolitical developments</li>
          <li>Watching and writing comedy</li>
          <li>Leadership activities</li>
          <li>Swimming</li>
        </ul>
      </section>

      <section className="container mx-auto ">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Contact info</h2>
        <strong>Email:</strong>
        <a href="mailto:job.m.wambugu@gmail.com" className="" target="_blank"> job.m.wambugu@gmail.com</a>
      </section>
      
    </div>
)
}

export default Home;