import { GiVideoCamera } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { MdGTranslate } from "react-icons/md";
import { BsBroadcastPin } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import { RiNewspaperLine } from "react-icons/ri";
import { RiPresentationFill } from "react-icons/ri";


function Skills() {

  return (
    <div className="container mx-auto mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-center p-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <GiVideoCamera className="text-6xl"/>
          </div>
          <p className="text-center">Shooting, writing scripts, and editing stories.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <MdGTranslate className="text-5xl"/>
          </div>
          <p className="text-center">Translations of video,audio, and written content.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <BsBroadcastPin className="text-5xl"/>
          </div>
          <p className="text-center">On-air appearances and coordinating live shots.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <GiArchiveResearch className="text-5xl"/>
          </div>
          <p className="text-center">Proactive research skills and ethical journalism.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <GiTalk className="text-5xl"/>
          </div>
          <p className="text-center">Social media management.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <RiPresentationFill className="text-5xl"/>
          </div>
          <p className="text-center">Excellent spoken and written communication skills in both English and Kiswahili.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <FaUsersLine className="text-5xl"/>
          </div>
          <p className="text-center">Developing community sources for unique insights and reports on impactful issues.</p>
        </div>

        <div className="border border-amber-500 p-4 rounded-md shadow-md hover:shadow-xl hover:scale-102 transition">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center mb-3">
            <RiNewspaperLine className="text-5xl"/>
          </div>
          <p className="text-center">News judgment.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;