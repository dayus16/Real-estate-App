import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <About />
        <Projects />
        <Testimonials />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
