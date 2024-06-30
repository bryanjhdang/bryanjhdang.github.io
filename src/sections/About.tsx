import { SectionTitle, SectionWrapper } from "../components/SectionComponents";

export default function About() {
  return (
    <div id="about" className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <SectionTitle title="ABOUT" />
        <p className="text-base mb-5">Based in Vancouver BC, I'm currently attending SFU in the <a className="text-blue-600 underline" href="https://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html" target="_blank">Software Systems program</a> in my 4th year!</p>
        <p className="text-base mb-5">I enjoy building things that make my life easier, such as trackers for Dungeons & Dragons or Discord bots. I also make games using Unity and Godot.</p>
        <p className="text-base mb-5">My hobbies include playing games (both virtual and tabletop), reading manga, and binge watching bushcrafting videos on YouTube. Shoutouts to Outdoor Boys. My favorite game is The Great Ace Attorney, and my favorite manga is Haikyuu.</p>
        <p className="text-base mb-5">Sometimes <a className="text-blue-600 underline" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, like game reviews and cool events.</p>
      </SectionWrapper>
    </div>
  )
}