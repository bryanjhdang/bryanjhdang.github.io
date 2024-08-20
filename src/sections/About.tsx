import { SectionTitle, SectionWrapper } from "../components/SectionComponents";
import ProfileImg from "../assets/images/profile.jpg";

export default function About() {
  return (
    <div id="about" className="pt-20 sm:pt-32 pb-20 sm:pb-32 border-none">
      <SectionWrapper>
        <SectionTitle title="ABOUT" />
        <div className="flex flex-col lg:flex-row">
          <div className="sm:mr-20 text-base space-y-8">
            <p>Based in Vancouver, I'm currently doing a Computer Science degree at SFU! You can get in touch with me through <a className="underline" href="mailto:bda37@sfu.ca">email</a> or <a className="underline"href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">LinkedIn</a>.</p>
            <p>Sometimes <a className="underline" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, like game reviews and whatever media I end up consuming that day.</p>
            <p>My hobbies include playing games both virtual and tabletop, reading manga, and binge watching camping videos on YouTube. My favorite game is Baldur's Gate 3, and my favorite manga is Haikyuu.</p>
          </div>
          <img src={ProfileImg} alt="Bryan Profile Picture" className="w-96 object-cover pt-10 sm:pt-20 lg:pt-0" />
        </div>
      </SectionWrapper>
    </div>
  )
}