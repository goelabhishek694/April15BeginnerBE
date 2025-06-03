import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import { lazy, Suspense, useEffect, useState } from 'react';

//lazy load the components
const HomePage = lazy(() =>  import("./HomePage"));
const AboutPage = lazy(() =>  import("./AboutPage"));
const ContactPage = lazy(() =>  import("./ContactPage"));

function App() {

  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);

  // useEffect(() => {
  //   import("./HomePage").then((module) => setHomePage(() => module.default));
  // }, []);

  // const loadHomePage = () => {
  //   import("./HomePage").then((module) => setHomePage(() => module.default));
  // }
  // const loadAboutPage = () => {
  //   import("./AboutPage").then((module) => setAboutPage(() => module.default));
  // }
  // const loadContactPage = () => {
  //   import("./ContactPage").then((module) => setContactPage(() => module.default));
  // }
 
  return (
    <Router>
      <div>
        {/* <Navbar/> */}

        {/* <nav>
            <ul>
                <li><Link to="/" onClick={loadHomePage}>Home</Link></li>
                <li><Link to="/about" onClick={loadAboutPage}>About</Link></li>
                <li><Link to="/contact" onClick={loadContactPage}>Contact</Link></li>
            </ul>
          </nav> */}

        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}/>
        {/* <Routes>
          <Route path='/' element={HomePage ? <HomePage/>: <div>Loading...</div>}></Route>
          <Route path='/about' element={AboutPage? <AboutPage/> : <div>Loading...</div>}></Route>
          <Route path='/contact' element={ContactPage ? <ContactPage/>: <div>Loading...</div>}></Route>
        </Routes> */}

<Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/> }></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
