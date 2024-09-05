// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/projects';
import blogs from '../data/blogs';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p>
            I'm a software engineer with skills in Python, Java, and ERP systems, and a strong focus on business and data analysis using Power BI and Power Query. I create tutorials and write tech blogs, and I plan to learn and teach cloud computing as I continue to grow in my career.
          </p>
          <p>
            I hold a B.Sc. in Computer Science from ADA University and am now studying Digital Technology and Management at OTH Amberg-Weiden in Bavaria, Germany. I also work as an IT working student at GT Elektronik GmbH, where I gain practical experience while pursuing my studies.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded shadow mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  <a href={project.link} className="text-blue-500">{project.title}</a>
                </h3>
                <p><strong>{project.type}</strong></p>
                <p>{project.description}</p>
              </div>
              {project.repo && (
                <a href={project.repo} className="text-gray-800" title="View Repository">
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Blogs</h2>
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white p-4 rounded shadow mb-4">
              <h3 className="text-xl font-semibold">
                <a href={`/blog/${blog.slug}`} className="text-blue-500">{blog.title}</a>
              </h3>
              <p>{blog.excerpt}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
