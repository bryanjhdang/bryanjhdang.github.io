import { SectionTitle, SectionWrapper } from "../components/SectionComponents";

export default function About() {
  return (
    <SectionWrapper>
      <div className="pt-10 sm:pt-20 pb-10 sm:pb-20">
        <SectionTitle title="ABOUT" />
        <p className="text-sm sm:text-base mb-5">Based in Vancouver BC, I'm currently attending SFU in the Software Systems program in my 4th year!</p>
        <p className="text-sm sm:text-base mb-5">I enjoy building things that make my life easier like a tracker for Dungeons & Dragons or Discord bots. I also make games using Unity and Godot.</p>
        <p className="text-sm sm:text-base mb-5">My hobbies include playing games (both virtual and tabletop), reading manga, and binge watching bushcrafting videos on YouTube. My favorite game is The Great Ace Attorney, and my favorite manga is Haikyuu.</p> 
        <p className="text-sm sm:text-base mb-5">Sometimes I blog about stuff, like game reviews and cool events.</p>
      </div>
    </SectionWrapper>
  )
}