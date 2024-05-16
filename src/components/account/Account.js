import './Account.css'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Account(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <div className="boxAccount">
        <h6>{props.time}</h6>
        <Button onClick={handleClick} variant="success">{props.price}</Button>
      </div>
    </>
  );
}

export default Account;
