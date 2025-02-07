import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

// why is const used here and not like a function or a class
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to</p>
      <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            aperiam sapiente ab, accusamus distinctio id dignissimos modi
            impedit vel ipsa rerum mollitia, eius fugiat repellat eveniet quo
            cum nam consequuntur! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sequi quibusdam necessitatibus non nesciunt.
            Architecto placeat soluta inventore quidem et voluptates? Deserunt
            quod accusantium soluta doloremque sapiente asperiores commodi dicta
            saepe."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            aperiam sapiente ab, accusamus distinctio id dignissimos modi
            impedit vel ipsa rerum mollitia, eius fugiat repellat eveniet quo
            cum nam consequuntur! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sequi quibusdam necessitatibus non nesciunt.
            Architecto placeat soluta inventore quidem et voluptates? Deserunt
            quod accusantium soluta doloremque sapiente asperiores commodi dicta
            saepe."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
