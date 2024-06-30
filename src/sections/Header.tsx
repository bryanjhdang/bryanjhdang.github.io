import { SectionWrapper } from "../components/SectionComponents";

export default function Header() {
  return (
    <SectionWrapper>
      <div className="pt-5 pb-10 sm:pb-20 flow-root">
        <p className="float-right">Blog</p>
        <p className="float-right">Projects</p>
        <p className="float-right">About</p>
      </div>
    </SectionWrapper>
  )
}