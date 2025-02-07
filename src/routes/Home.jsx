import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assets/12.jpg";
import Destination from "../components/Destination";

function Home() {
  return (
    //   empty figment
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
    </>
  );
}

export default Home;
