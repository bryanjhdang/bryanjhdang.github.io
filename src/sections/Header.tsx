import { SectionWrapper } from "../components/SectionComponents";

export default function Header() {
  return (
    <div className="hidden sm:block pt-10 pb-10 sm:pb-20 flow-root">
      <SectionWrapper>
        <p className="text-base hover:underline float-left mr-10 font-bold">Bryan Dang</p>
        <p className="text-base hover:underline float-left mr-10">About</p>
        <p className="text-base hover:underline float-left mr-10">Projects</p>
        <a href="https://bryandang.substack.com/" target="_blank" className="text-base hover:underline float-left mr-10">Blog</a>
      </SectionWrapper>
    </div>
  )
}