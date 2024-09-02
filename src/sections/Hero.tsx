import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div id="main" className="pt-14 sm:pt-32 pb-20 sm:pb-48 border-none">
      <p className="text-4xl font-extrabold">
        HI, I'M BRYAN
      </p>
      <div className="flex text-2xl h-12">
        <p>
          A Computer Science student doing{' '}
          <span className="">
            <Typewriter
              words={['web development', 'game development']}
              loop={0}
              cursor
              cursorStyle={'_'}
              typeSpeed={50}
              deleteSpeed={50}
            />
          </span>
        </p>
      </div>
    </div>
  )
}