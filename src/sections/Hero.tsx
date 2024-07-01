import { SectionWrapper } from "../components/SectionComponents";
import EmailImg from "../assets/images/email-outline.png";
import LinkedinImg from "../assets/images/linkedin-black.png";

export default function Hero() {
  return (
    <div id="main" className="pt-10 sm:pt-20 pb-14 sm:pb-24">
      <SectionWrapper>
        <p className="text-3xl xl:text-4xl font-extrabold">HI, I'M BRYAN</p>
        <p className="text-xl lg:text-2xl">A Vancouver CS student that likes to work in web and game development.</p>
        {/* <div className="pt-8 flex flex-row gap-5 text-xl items-center">
          <a href="mailto:bda37@sfu.ca" className="underline">
            <img src={EmailImg} alt="Email" className="w-12" />
          </a>
          <a href="https://www.linkedin.com/in/bryanjhdang/" target="blank" className="underline">
            <img src={LinkedinImg} alt="LinkedIn" className="w-9" />
          </a>
        </div> */}
      </SectionWrapper>
    </div>
  )
}