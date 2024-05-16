import { useNavigate } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import {PiTelevisionBold} from 'react-icons/pi';
import { FaTabletAlt } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import watch from '../../assets/images/watch.webp'
import how from '../../assets/images/how.webp'
import MyNavbar from '../../components/navbar/MyNavbar';
import HomeHead from './homeHeaf/HomeHead';
import HomePerson from './homePerson/HomePerson';
import './Home.css'
import Comment from "../../components/comment/Comment";
import Question from "./question/Question";
import Footer from "../../components/footer/Footer";




function Home() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/login')
    }

    return (
        <>
            <MyNavbar />
            <HomeHead />
            <div className="watchHome">
                <div className="imageWatch">
                    <img src={watch}/>
                </div>
                <div className="infoWatch">
                    <h3>تماشای فیلیمو با همه دستگاه‌ها</h3>
                    <p style={{backgroundColor : "transparent", color : "lightgray"}}>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
                    <h5><RiComputerLine /> کامپیوتر و لپ تاپ</h5>
                    <h5><FaTabletAlt /> موبایل و تبلت</h5>
                    <h5><GiConsoleController /> کنسول های بازی (Browser)</h5>

                    <button onClick={clickHandler} ><PiTelevisionBold size={20} style={{backgroundColor : "transparent"}} /> خرید اشتراک و تماشا</button>
                </div>
            </div>
            <div className="HowWatch">
                <div className="imageHow">
                    <img src={how}/>
                </div>
                <div className="infoHow" style={{backgroundColor : "transparent"}}>
                    <h3 style={{backgroundColor : "transparent", marginRight : "100px"}}>چطور با تلویزیون، فیلیمو تماشا کنم؟</h3>
                    <p style={{backgroundColor : "transparent", color : "lightgray", marginRight : "100px"}}>ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را انتخاب کنید.</p>
                    <h5 style={{backgroundColor : "transparent", marginRight : "100px"}}><RiComputerLine style={{backgroundColor : "transparent"}} />  تلویزیون  </h5>
                    <h5 style={{backgroundColor : "transparent", marginRight : "100px"}}><FaTabletAlt style={{backgroundColor : "transparent"}} />  اندروید تی وی </h5>
                </div>
            </div>
            <HomePerson />
            <Comment />
            <Question />
            <Footer />
        </>
    );
}

export default Home;