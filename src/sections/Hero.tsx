import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div id="main" className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mr-20">
            <p className="text-3xl xl:text-4xl font-extrabold">HI, I'M BRYAN</p>
            <p className="text-xl lg:text-2xl">A Vancouver CS student that likes to work in web and game development</p>
            <div className="pt-5 sm:pt-10 flex flex-row gap-3 sm:gap-10 text-base sm:text-xl items-center">
              {/* <a className="text-blue-600 underline">Resume</a> */}
              <a href="mailto:bda37@sfu.ca" className="underline">
                Email
              </a>
              <a href="https://www.linkedin.com/in/bryanjhdang/" target="blank" className="underline">
                LinkedIn
              </a>
            </div>
          </div>
          <img src="src/assets/images/profile.jpg" alt="Bryan profile picture" width={350} className="pt-10 sm:pt-20 lg:pt-0" />
        </div>
      </SectionWrapper>
    </div>
  )
}