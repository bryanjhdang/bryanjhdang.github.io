import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div id="main" className="pt-10 sm:pt-20 pb-14 sm:pb-24">
      <SectionWrapper>
        <p className="text-3xl xl:text-4xl font-extrabold">HI, I'M BRYAN</p>
        <p className="text-xl lg:text-2xl">A Vancouver CS student that likes to work in web and game development.</p>
      </SectionWrapper>
    </div>
  )
}