import { useState } from 'react'
import './App.css'
import {Navbar} from './'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <header>
    <Navbar/>
  </header>
  <section id="about">
    <div className="container">
      <h2>About Me</h2>
      <p>Write a brief introduction about yourself here. Mention your skills, experiences, and what makes you unique.</p>
    </div>
  </section>
  <section id="portfolio">
    <div className="container">
      <h2>Portfolio</h2>
      {/* Add your portfolio projects here */}
    </div>
  </section>
  <section id="contact">
    <div className="container">
      <h2>Contact Me</h2>
      <p>You can reach me at <a href="mailto:lakshy4403@gmail.com">lakshy4403@gmail.com</a></p>
    </div>
  </section>
  <footer>
    <div className="container">
      <p>© 2023 Lakshya Malik</p>
    </div>
  </footer>

    </>
  )
}

export default App
