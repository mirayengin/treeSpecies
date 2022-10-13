import Writer from "./Writer";
import { Data } from "../../helper/data";
import "./Card.css"

const Card = () => {
  return (
    <div className="row">
      {Data.map((item) => (
        <Writer
          key={item.id}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Card;
