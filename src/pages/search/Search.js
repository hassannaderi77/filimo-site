import "./Search.css";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";

function Search() {

  const [films, setFilms] = useState([]);

  const [serachKey, setSearchKey] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:5000/movie")
      .then((response) => setFilms(response.data));
  }, [serachKey]);

  const searchChangeHandler = (e) => {
    setSearchKey(e.target.value)
  }

  const clickHandler = () => {
    axios
    .get(`http://localhost:5000/movie?name=${serachKey}`)
    .then((response) => setFilms(response.data));
  }

  


  return (
    <>
      <MyNavbar />
      <Container>
        
        <h5 style={{ marginTop: "20px" }}>
          نکته : جستجو بر اساس اسم فیلم یا سریال به صورت فارسی امکان پذیر
          میباشد.
        </h5>
        <div className="searchSection">
          <h1>لیست فیلم و سریال ها :</h1>
          <div className="searchBoxContainer">
            <input type="text" className="searchInput" onChange={searchChangeHandler} />
            <button className="searchButton" onClick={clickHandler}>جستجو</button>
          </div>
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

export default Search;
