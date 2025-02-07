import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/2.jpg";

function About() {
  return (
    //   empty figment
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About" btnClass="hide" />
    </>
  );
}

export default About;
