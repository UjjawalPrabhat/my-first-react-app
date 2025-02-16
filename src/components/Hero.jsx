import "./HeroStyles.css";

// why is func used here and not like const or a class
function Hero(props) {
  return (
    //   empty figment
    <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
