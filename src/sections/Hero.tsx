import { SectionWrapper } from "../components/SectionComponents";

export default function Hero() {
  return (
    <div id="main" className="pt-14 sm:pt-32 pb-20 sm:pb-48 border-none">
      <SectionWrapper>
        <p className="text-3xl xl:text-4xl font-extrabold">HI, I'M BRYAN</p>
        <p className="text-xl lg:text-2xl">A Computer Science student doing webdev and gamedev</p>
      </SectionWrapper>
    </div>
  )
}