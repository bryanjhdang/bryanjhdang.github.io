import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div id="main" className="pt-14 sm:pt-32 pb-20 sm:pb-48 bg-neutral-800 text-white border-none">
      <SectionWrapper>
        <p className="text-3xl xl:text-4xl font-extrabold">HI, I'M BRYAN</p>
        <p className="text-xl lg:text-2xl">A Vancouver CS student that likes to work in web and game development</p>
      </SectionWrapper>
    </div>
  )
}