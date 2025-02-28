import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/2.jpg";
import Footer from "../components/footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    //   empty figment
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
