import Header from './components/header'
import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './app.css'

function App() {


  return (
    <div className="font-rubik">
      <Header />
    <div className='px-4 md:px-[100px] max-w-[1440px] mx-auto'>

      <Hero />
      <Features />
      <CallToAction />

    </div>
    <Footer/>
    </div>
  )
}

export default App
