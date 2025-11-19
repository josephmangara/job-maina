// import { useState } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Experience() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/b5mqWYc3_5I",
      title: "Washukiwa wawili wa genge la nyuki wapigwa risasi na polisi kaunti ya Nakuru",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/78sxU2g8fVI",
      title: "Tume huru ya IEBC yaanza rasmi kusambaza vifaa vya uchaguzi",
    },
    {
      id: 3,
      src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fparadisepointnyahururu%2Fvideos%2F357260065685320%2F&show_text=false&width=560&t=0",
      title: "ZIWA TV Facebook Video",
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % videos.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  // };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl  font-semibold p-6">Experience</h2>

      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold">Television Exposure at K24</h3>
        <p className="text-sm text-gray-600 mb-2">Aug 2021 - Oct 2022</p>
        <p className="font-medium">
          Reporter and Intern at K24 Television, a leading television station in Kenya.</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Translated news items from English to Kiswahili.</li>
          <li>Pioneered daily pitch sessions for original story ideas.</li>
          <li>Scripted TV coverage and contributed to news stories and features.</li>
          <li>Provided coverage for key events and feature stories.</li>
          <li>Collected and reported news stories.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold">Intern at ZIWA TV</h3>
        <p className="text-sm text-gray-600 mb-2">Aug 2020 - Nov 2020</p>
        <p className="font-medium">Reporter and News Anchor at ZIWA TV, a local Kiswahili station.</p>
      </div>

      {/* Videos */}
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
            {videos.map((video) => (
              <div key={video.id} className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
        </div>
      {/* <div className="relative mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {videos.map((video) => (
              <div key={video.id} className="shrink-0 w-full md:w-1/2 px-2">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 -left-4 bg-amber-200/80 p-3 rounded-full shadow-md hover:bg-white z-10"
        >
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 -right-4 bg-amber-200/80 p-3 rounded-full shadow-md hover:bg-white z-10"
        >
          <FiChevronRight className="text-2xl" />
        </button> */}
      </div>
    </div>
  );
}

export default Experience;
