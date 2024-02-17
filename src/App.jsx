import { useState } from 'react'
import Hero from './Component(s)/Hero'
import Services from './Component(s)/Services'
import TrustedBy from './Component(s)/TrustedBy'
import Footer from './Component(s)/Footer'
import Navbar from './Component(s)/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustedBy />
      <Footer />
    </>
  )
}

export default App
