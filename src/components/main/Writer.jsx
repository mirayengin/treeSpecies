import "./Writer.css";

const Writer = (props) => {
  const { title, desc, image } = props;

  return (
    <div className="col-4 card">
      <div className="titleDiv">
        <h1>{title}</h1>
      </div>
      <div className="imgDiv">
        <img src={image} className="card-img-top" alt="img" />
      </div>
      <div className="card-body">
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Writer;
