import React from 'react';
import Description from './components/Description';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Select from './components/Select';
import Slide from './components/Slide';
import Variety from './components/Variety';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Variety />
      <Description />
      <Select />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;