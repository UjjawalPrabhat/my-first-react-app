import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceImg from "../assets/3.jpg";
import Footer from "../components/footer";
import Trip from "../components/Trip"

function Service() {
  return (
    //   empty figment
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={serviceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
