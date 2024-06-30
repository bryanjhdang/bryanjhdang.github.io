import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div id="main" className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mr-20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">HI, I'M BRYAN</p>
            <p className="text-base sm:text-xl md:text-2xl">A Vancouver CS student that likes to work in web and game development</p>
          </div>
          <img src="src/assets/profile.jpg" alt="Bryan profile picture" width={350} className="pt-10 sm:pt-20 md:pt-0" />
        </div>
      </SectionWrapper>
    </div>
  )
}