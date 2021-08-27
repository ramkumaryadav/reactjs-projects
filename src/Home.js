import React from 'react';
import Navbar from "./navbar";
import Header from "./Header";
import Howitwork from "./Howitwork";
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

export const Home = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Howitwork />
     <Aboutus />
     <Services />
     <Contact />
     <Footer />
    </>
  );
};


export default Home;
