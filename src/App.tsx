import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  return (
    <div className='font-jost'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
