import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-1 mr-20">
            <p className="text-3xl sm:text-4xl font-extrabold">HI, I'M BRYAN</p>
            <p className="text-base sm:text-xl">A Vancouver-based CS student that likes to work in web and game development</p>
          </div>
          <img src="src/assets/profile.jpg" alt="Bryan profile picture" width={350} />
        </div>
      </SectionWrapper>
    </div>
  )
}