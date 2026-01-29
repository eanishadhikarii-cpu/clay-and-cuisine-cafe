import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import SocialProof from './components/SocialProof';
import BookTable from './components/BookTable';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <Reviews />
      <SocialProof />
      <BookTable />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;