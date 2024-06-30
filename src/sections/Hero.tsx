import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div className="pt-20 sm:pt-40 pb-40 sm:pb-60">
      <SectionWrapper>
        <p className="text-3xl sm:text-4xl font-extrabold">HI, I'M BRYAN</p>
        <p className="text-base sm:text-xl">A Vancouver-based CS student that likes to work in web and game development</p>
        {/* <img src="src/assets/profile.jpg" alt="Bryan profile picture" width={400} /> */}
      </SectionWrapper>
    </div>
  )
}