import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/footer";

function Home() {
  return (
    // empty figment
    // In react every component must return a single element
    // so we use empty figment to wrap multiple elements
    // can use a div too but figment is more efficient and avoids unnecessary markups 
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
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
