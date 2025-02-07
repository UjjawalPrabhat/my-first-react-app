import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/night.jpg";

function Contact() {
  return (
    //   empty figment
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
