import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import serviceImg from "../assets/3.jpg";

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
    </>
  );
}

export default Service;
