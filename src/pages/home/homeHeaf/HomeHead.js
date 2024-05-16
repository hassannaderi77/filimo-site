import { PiTelevisionBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import joker from '../../../assets/images/joker.jpg';
import './HomeHead.css'
import { FcTodoList } from "react-icons/fc";

function HomeHead() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/login')
    }

  return (
    <>
        <div className="headHome" style={{backgroundImage : `url('${joker}')`}}>
            <h5>با فیلیمو بی وقفه فیلم ببین</h5>
            <h1>کنترل همیشه دست توست!</h1>
            <div className="youCan">
                <h6><FcTodoList size={25} style={{backgroundColor : "transparent"}} />  90 هزار فیلم و سریال برای تماشا داری</h6>
                <h6><FcTodoList size={25} style={{backgroundColor : "transparent"}} />  میتونی دانلود کنی بعد بدون اینترنت تماشا کنی</h6>
                <h6><FcTodoList size={25} style={{backgroundColor : "transparent"}} />  میتونی یک عضو,مخصوص تماشای کودک بسازی</h6>
            </div>
            <button onClick={clickHandler} ><PiTelevisionBold size={25} style={{backgroundColor : "transparent"}} /> خرید اشتراک و تماشا</button>
        </div>
    </>
  );
}

export default HomeHead;
