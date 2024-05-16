import { useParams } from "react-router-dom";
import "./Movie.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MyNavbar from "../../components/navbar/MyNavbar";
import { HiSave } from "react-icons/hi";
import { MdLocalMovies } from "react-icons/md";
import { FaRegClock, FaBuysellads } from "react-icons/fa6";
import ekran from "../../assets/images/ekran.webp";


function Movie() {
  const movieId = useParams().movieId;

  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movie/${movieId}`)
      .then((response) => setVideoData(response.data));
  }, []);


  return (
    <>
      <MyNavbar />
      <div
        className="headMovie"
        style={{
          backgroundImage:
            `url('${videoData.bannerSrc}')`,
        }}
      >
        <div className="rightPoster">
          <div className="imageMovie">
            <img src={`${videoData.posterSrc}`} />
            <button className="later">
              <HiSave style={{ backgroundColor: "transparent" }} /> بعدا میبینم
            </button>
          </div>
          <div className="infoMovie">
            <h4 className="default">{videoData.name}</h4>
            <div className="rate default">10/5.8 IMDB</div>
            <h6 className="default" style={{color : "orange", fontWeight : "bold"}}>مناسب بالای 15 سال</h6>
            <h6 className="default">کارگردان : {videoData.director} </h6>
            <h6 className="default">یکساعت و 31 دقیقه - 1399 - کیفیت HD</h6>
          </div>
        </div>
        <div className="leftPoster">
          <div className="imageEkran">
            <img src={ekran} />
            <h5 className="default">اکران آنلاین فیلم های سینمایی</h5>
            <h6 className="default">
              <MdLocalMovies className="default" /> فیلم های روز سینمای ایران
            </h6>
            <h6 className="default">
              <FaRegClock className="default" /> ۸ ساعت زمان برای مشاهده فیلم در هر کجا
            </h6>
            <h6 className="default">
              <FaBuysellads className="default" /> خرید یک بلیت و تماشا به همراه اعضای خانواده
            </h6>
          </div>
          <button className="buyTicket default">ورود و خرید بلیت</button>
        </div>
      </div>

      <div className="storyMpvie">
        <h3 className="default">داستان {videoData.name} :</h3>
        <p className="default">{videoData.story}</p>
        <h3 className="default">درباره {videoData.name} :</h3>
        <p className="default">{videoData.about}</p>
      </div>
    </>
  );
}

export default Movie;
