import { SectionTitle, SectionWrapper } from "../components/SectionComponents";
import ProfileImg from "../assets/images/profile.jpg";
import EmailImg from "../assets/images/email-outline.png";
import LinkedinImg from "../assets/images/linkedin-black.png";

export default function About() {
  return (
    <div id="about" className="pt-14 sm:pt-24 pb-14 sm:pb-24">
      <SectionWrapper>
        <SectionTitle title="ABOUT" />
        <div className="flex flex-col lg:flex-row">
          <div className="mr-20">
            <p className="text-base mb-5">Based in Vancouver BC, I'm currently attending SFU in the Software Systems program in my 4th year!</p>
            <p className="text-base mb-5">I enjoy building things that make my life easier, such as trackers for Dungeons & Dragons or Discord bots. I also make games using Unity and Godot.</p>
            <p className="text-base mb-5">Sometimes <a className="text-blue-600 underline" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, like game reviews and cool events.</p>
            <p className="text-base mb-5">My hobbies include playing games (both virtual and tabletop), reading manga, and binge watching bushcrafting videos on YouTube. Shoutouts to Outdoor Boys. My favorite game is The Great Ace Attorney, and my favorite manga is Haikyuu.</p>
            <p className="text-base mb-5">You can get in touch with me through <a className="text-blue-600 underline" href="mailto:bda37@sfu.ca">Email</a> or <a className="text-blue-600 underline"href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">LinkedIn</a>!</p>
          </div>
          <img src={ProfileImg} alt="Bryan Profile Picture" width={350} className="pt-10 sm:pt-20 lg:pt-0" />
        </div>
      </SectionWrapper>
    </div>
  )
}