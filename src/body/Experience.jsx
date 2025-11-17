function Experience() {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl text-center font-semibold p-6">
        Experience
      </h2>

      {/* K24 Experience */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold">Television Exposure at K24</h3>
        <p className="text-sm text-gray-600 mb-2">Aug 2021 - Oct 2022</p>
        <p className="font-medium">Reporter and Intern at K24 Television, a leading television station in Kenya.</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Translated news items from English to Kiswahili.</li>
          <li>Pioneered daily pitch sessions for original story ideas.</li>
          <li>Scripted TV coverage and contributed to news stories and features.</li>
          <li>Provided coverage for key events and feature stories.</li>
          <li>Collected and reported news stories.</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="aspect-video">
                <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/b5mqWYc3_5I"
                title="Washukiwa wawili wa genge la nyuki wapigwa risasi na polisi kaunti ya Nakuru"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </div>

            <div className="aspect-video">
                <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/78sxU2g8fVI"
                title="Tume huru ya IEBC yaanza rasmi kusambaza vifaa vya uchaguzi"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </div>
        </div>

      </div>

      {/* ZIWA TV Experience */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold">Intern at ZIWA TV</h3>
        <p className="text-sm text-gray-600 mb-2">Aug 2020 - Nov 2020</p>

        <p className="font-medium">
            Reporter and News Anchor at ZIWA TV, a local Kiswahili station.
        </p>

        <div className="w-full">
            <div className="relative w-full max-w-[800px] pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
                loading="lazy"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fparadisepointnyahururu%2Fvideos%2F357260065685320%2F&show_text=false&width=560&t=0"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
        </div>
      </div>


    </div>
  );
}

export default Experience;
