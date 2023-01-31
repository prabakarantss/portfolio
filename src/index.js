import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import Banner from './components/banner';
import AboutMe from './components/about-me';
import Experience from './components/experience';
import Skills from './components/skills';
import Footer from './components/footer';
import Contact from './components/contact';
import Myworks from './components/myworks';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <AboutMe />
    <Experience />
    <Skills />
    <Myworks />
    <Contact />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();

