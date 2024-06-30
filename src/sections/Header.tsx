import { SectionWrapper } from "../components/SectionComponents";
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div className="hidden sm:block pt-10 pb-10 sm:pb-20 flow-root">
      <SectionWrapper>
        <Link to="main" smooth={true} duration={500} className="text-base hover:underline float-left mr-10 cursor-pointer font-bold">Bryan Dang</Link>
        <Link to="about" smooth={true} duration={500} className="text-base hover:underline float-left mr-10 cursor-pointer">About </Link>
        <Link to="projects" smooth={true} duration={500} className="text-base hover:underline float-left mr-10 cursor-pointer">Projects</Link>
        <a href="https://bryandang.substack.com/" target="_blank" className="text-base hover:underline float-left mr-10 cursor-pointer">Blog</a>
      </SectionWrapper>
    </div>
  )
}