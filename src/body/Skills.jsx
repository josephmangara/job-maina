import { GiVideoCamera } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { MdGTranslate } from "react-icons/md";
import { BsBroadcastPin } from "react-icons/bs";
import { GiArchiveResearch } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";
import { RiNewspaperLine } from "react-icons/ri";


function Skills() {

  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl text-center p-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <GiVideoCamera />
          </div>
          <p>Shooting, writing scripts, and editing stories.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <MdGTranslate />
          </div>
          <p>Translations of video,audio, and written content.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <BsBroadcastPin />
          </div>
          <p>On-air appearances and coordinating live shots.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <GiArchiveResearch />
          </div>
          <p>Proactive research skills and ethical journalism.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <GiTalk />
          </div>
          <p>Social media management.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <ImHeadphones />
          </div>
          <p>Excellent spoken and written communication skills in both English and Kiswahili.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <FaUsersLine />
          </div>
          <p>Developing community sources for unique insights and reports on impactful issues.</p>
        </div>

        <div className="border border-amber-500 p-2">
          {/* <img src="" alt="" /> */}
          <div className="flex justify-center">
            <RiNewspaperLine />
          </div>
          <p>News judgment.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;