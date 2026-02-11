import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen relative">
          {/* VIP Background Mesh */}
          <div className="bg-mesh">
            <div className="blob" style={{ top: '10%', left: '10%' }}></div>
            <div className="blob" style={{ top: '60%', left: '80%', animationDelay: '5s' }}></div>
            <div className="blob" style={{ top: '40%', left: '40%', animationDelay: '2s' }}></div>
            <div className="blob" style={{ top: '80%', left: '20%', animationDelay: '7s', width: '600px', height: '600px' }}></div>
            <div className="blob" style={{ top: '20%', left: '70%', animationDelay: '10s' }}></div>
          </div>

          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
