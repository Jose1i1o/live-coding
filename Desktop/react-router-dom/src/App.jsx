import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} replace/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About us</h2>
}

function Contact() {
  return <h2>Contact us</h2>
}

export default App
