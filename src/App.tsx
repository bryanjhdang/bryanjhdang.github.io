import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full px-4 sm:px-6 lg:px-0 max-w-6xl'>

        {/* px-10 sm:px-20 lg:px-40 xl:px-60 */}
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
