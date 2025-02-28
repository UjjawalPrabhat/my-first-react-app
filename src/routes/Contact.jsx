import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/night.jpg";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm"

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
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
