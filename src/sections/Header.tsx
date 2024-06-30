import { SectionWrapper } from "../components/SectionComponents";

export default function Header() {
  return (
    <div className="hidden sm:block pt-10 pb-10 sm:pb-20 flow-root">
      <SectionWrapper>
        <a href="https://bryandang.substack.com/" target="_blank" className="text-base hover:underline float-right ml-10">Blog</a>
        <p className="text-base hover:underline float-right ml-10">Projects</p>
        <p className="text-base hover:underline float-right">About</p>
      </SectionWrapper>
    </div>
  )
}