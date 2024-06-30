import { SectionWrapper } from "../components/SectionComponents";

export default function Footer() {
  return (
    <SectionWrapper>
      <div className="pt-10 pb-10 flow-root">
        <p className="float-left text-sm text-gray-500">@ 2024 Bryan Dang</p>
        <p className="float-right hidden sm:block text-sm text-gray-500">Built with React & Tailwind</p>
      </div>
    </SectionWrapper> 
  )
}