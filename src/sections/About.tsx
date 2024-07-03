import { SectionTitle, SectionWrapper } from "../components/SectionComponents";
import ProfileImg from "../assets/images/profile.jpg";

export default function About() {
  return (
    <div id="about" className="pt-20 sm:pt-32 pb-20 sm:pb-32 bg-[#232534] text-gray-400 border-none">
      <SectionWrapper>
        <SectionTitle title="ABOUT" />
        <div className="flex flex-col lg:flex-row">
          <div className="sm:mr-20 text-base">
            <p className="mb-5">Based in Vancouver BC, I'm currently attending SFU in the Software Systems program in my 4th year!</p>
            <p className="mb-5">I enjoy building things that make my life easier, such as trackers for Dungeons & Dragons or Discord bots. I also make games using Unity and Godot.</p>
            <p className="mb-5">Sometimes <a className="text-white underline" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, like game reviews and cool events.</p>
            <p className="mb-5">My hobbies include playing games (both virtual and tabletop), reading manga, and binge watching bushcrafting videos on YouTube. Shoutouts to Outdoor Boys. My favorite game is The Great Ace Attorney, and my favorite manga is Haikyuu.</p>
            <p className="mb-5">You can get in touch with me through <a className="text-white underline" href="mailto:bda37@sfu.ca">Email</a> or <a className="text-white underline"href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">LinkedIn</a>!</p>
          </div>
          <img src={ProfileImg} alt="Bryan Profile Picture" className="w-96 object-cover pt-10 sm:pt-20 lg:pt-0" />
        </div>
      </SectionWrapper>
    </div>
  )
}