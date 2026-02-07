import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Media from './pages/Media';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
