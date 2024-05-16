import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Comment.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Autoplay } from "swiper/modules";
import { MdOutlineAccountCircle } from "react-icons/md";

function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/comment")
      .then((response) => setComments(response.data));
  }, []);

  return (
    <>
      <div className="commentsCard">
        <h2>نظر کاربران بعد از تماشای فیلیمو ستایش</h2>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <h5 style={{ backgroundColor: "transparent" }}>
                <MdOutlineAccountCircle
                  size={30}
                  style={{ backgroundColor: "transparent" }}
                />
                {comment.name}
              </h5>
              <div
                className="information"
                style={{ backgroundColor: "transparent", overflow: "hidden" }}
              >
                <h6
                  style={{ maxHeight: "130px", backgroundColor: "transparent" }}
                >
                  {comment.description}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Comment;
