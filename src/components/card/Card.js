import { Link } from "react-router-dom";
import "./Card.css";
import Button from "react-bootstrap/Button";

function Card(props) {
  return (
    <>
      <div className="cardMovie">
                <div className="imgMovie">
                    <img src={props.posterSrc} />
                </div>
                <h5 style={{backgroundColor : "transparent", padding: "5px"}}>{props.name}</h5>
                <h6 style={{backgroundColor : "transparent", padding: "5px"}}>کارگردان : {props.director}</h6>
                <p>{props.description}</p>
                <Link to={`/movie/${props.id}`}><Button variant="warning">ادامه و تماشا</Button></Link>
      </div>
    </>
  );
}

export default Card;
