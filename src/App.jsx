import { useState } from 'react'
import Hero from './Component(s)/Hero'
import Services from './Component(s)/Services'
import TrustedBy from './Component(s)/TrustedBy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Services />
      <TrustedBy />
    </>
  )
}

export default App
