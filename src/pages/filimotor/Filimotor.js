import MyNavbar from "../../components/navbar/MyNavbar";
import "./Filimotor.css";
import { Col, Container, Row,Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import { MdCategory } from "react-icons/md";
import logoC from '../../assets/images/logoC.png'

function Filmotor() {
  const [films, setFilms] = useState([]);

  const [category , setCategory] = useState("")

  useEffect(() => {

    if (category == "films")
      getVideoByCategory('films')
    else if (category == "series")
      getVideoByCategory('series')
    else if (category == "online")
      getVideoByCategory("online")
    else if (category == "free")
      getVideoByCategory("free")

    

    // axios
    // .get(`http://localhost:5000/movie`)
    // .then((response) => setFilms(response.data));

  }, [category]);

  const getVideoByCategory = (category) => {
    axios
    .get(`http://localhost:5000/movie?${category}=${category}`)
    .then((response) => setFilms(response.data));
  }

  

  const categoryHandler = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="filterWrapper">
          <div className="filterIcon">
            <MdCategory />
            <b style={{color : "orange"}}>دسته بندی</b>
          </div>
          <Form>
            <Form.Check
              type="checkbox"
              value="films"
              label="فیلم"
              onChange={categoryHandler}
              checked={category == 'films' ? true : false}
            />
            <Form.Check
              type="checkbox"
              value="series"
              label="سریال"
              onChange={categoryHandler}
              checked={category == 'series' ? true : false}
            />
            <Form.Check
              type="checkbox"
              value="free"
              label="رایگان"
              onChange={categoryHandler}
              checked={category == 'free' ? true : false}
            />
            <Form.Check
              type="checkbox"
              value="online"
              label="تماشای آنلاین"
              onChange={categoryHandler}
              checked={category == 'online' ? true : false}
            />

          </Form>

          <img src={logoC} className='logo' />
        </div>

        <Row
          className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6 gy-4 py-3"
          style={{ marginTop: "30px" }}
        >
          {films.map((film) => (
            <Col key={film.id}>
              <Card {...film} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Filmotor;
