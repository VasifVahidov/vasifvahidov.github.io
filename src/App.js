import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
