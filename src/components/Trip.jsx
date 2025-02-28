import "./TripStyles.css";
import TripData from "./TripData";
import trip1 from "../assets/5.jpg";
import trip2 from "../assets/8.jpg";
import trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!
      </p>
      <div className="tripCard">
        {/* TripData is a component so it should be capitalized */}
        <TripData
          image={trip1}
          heading="Trip in Indonesia"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!"
        />
        <TripData
          image={trip2}
          heading="Trip in Malaysia"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!"
        />
        <TripData
          image={trip3}
          heading="Trip in France"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cum ullam
        nam quaerat mollitia minus possimus nemo rerum molestiae dolorum totam
        sit debitis ratione cupiditate blanditiis similique, obcaecati
        reprehenderit fuga!"
        />
      </div>
    </div>
  );
}

export default Trip;
