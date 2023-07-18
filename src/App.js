import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/Home';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="center-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
