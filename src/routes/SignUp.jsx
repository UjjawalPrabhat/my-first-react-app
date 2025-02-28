import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import signupImg  from "../assets/1.jpg"
import Authentication from "../components/Authentication";

function SignUp() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={signupImg}
        title="Sign Up"
        btnClass="hide"
      />
    <Authentication/>
    <Footer/>
    </>
  );
}

export default SignUp;
