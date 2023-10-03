
import './App.css'
import AboutUs from './container/AboutUs/AboutUs'
import Header from './container/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FFCalculator from './components/FFCalculator/FFCalculator'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <FFCalculator />
      <Footer />
    </>
  )
}

export default App
