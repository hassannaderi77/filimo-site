import './Footer.css'
import filimo from '../../assets/images/filimo.png'
import { useNavigate } from "react-router-dom";
import { PiTelevisionBold } from "react-icons/pi";

function Footer() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="footer">
                <div className="filimoImage">
                    <img src={filimo} />
                </div>
                <div className="thousand">
                    <h6>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</h6>
                    <h6>هزاران انیمیشن و کارتون برای کودکان</h6>
                    <h6>پشتیبانی 24 ساعته برای راهنمایی شما</h6>
                </div>
                <button onClick={clickHandler} ><PiTelevisionBold size={25} style={{backgroundColor : "transparent"}} /> خرید اشتراک و تماشا</button>
            </div>
        </>
    );
}

export default Footer;