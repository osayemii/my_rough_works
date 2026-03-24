import BubbleBackground from './components/BubbleBackground/BubbleBackground'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <BubbleBackground />
      <Navbar />
      <main>
        <Home />
        <About />
        <ProjectSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

