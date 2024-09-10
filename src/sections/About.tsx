import { SectionTitle } from "./SectionComponents";
import ProfileImg from "../assets/images/profile.jpg";

export default function About() {
  return (
    <div id="about" className="pt-20 pb-20 border-none">
      <div className="flex flex-col lg:flex-row">
        <div className="sm:mr-20 text-base space-y-4">
          <SectionTitle title="ABOUT" />
          <p>
            Based in Vancouver, I'm currently doing a Computer Science degree at SFU! You can get in touch with me through <a className="link" href="mailto:bda37@sfu.ca">email</a> or <a className="link" href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">LinkedIn</a>.
          </p>
          <p>
            Sometimes <a className="link" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, usually game reviews and random media.
          </p>
          <p>
            My hobbies include playing both virtual and tabletop games, reading, and binge watching camping and speedrunning videos on YouTube. My favorite game is Baldur's Gate 3, and my favorite manga is Haikyuu.
          </p>
        </div>
        <img src={ProfileImg} alt="Bryan Profile Picture" className="w-80 object-cover pt-10 sm:pt-20 lg:pt-0" />
      </div>
    </div>
  )
}