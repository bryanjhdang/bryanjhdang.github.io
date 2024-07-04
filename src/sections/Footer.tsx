import { SectionWrapper } from "../components/SectionComponents";

export default function Footer() {
  return (
    <div className="pt-10 pb-10 sm:pb-14 flow-root bg-neutral-800 text-white border-none">
      <SectionWrapper>
        <p className="float-left text-sm text-gray-400">@ 2024 Bryan Dang</p>
        <p className="float-right hidden sm:block text-sm text-gray-400">Built with React & Tailwind</p>
      </SectionWrapper>
    </div>
  )
}