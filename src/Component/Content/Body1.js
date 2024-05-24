import React, { useState, useEffect } from "react";
import image1 from "../../Assets/image1.JPG";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebook, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";

const Body1 = () => {
  const [myTime, setMyTime] = useState();
  const getTime = () => {
    setMyTime(new Date().toLocaleTimeString());
  };
  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <Container className="body1 justify-content-center ">
      <Row className=" body1">
        <Col className="social-icons ">
          <div>
            <p className="name">
              Hello,<span className="span1"> I'M ADEYINKA</span>
            </p>
          </div>

          <div>
            <p>
              I am a
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "passionate coder",
                  2000,
                  "Frontend develooper",
                  4000,
                  "Backend develooper",
                  4000,
                  "Full stack developer",
                  4000,
                ]}
              />
            </p>
          </div>

          <div>
            <p className="text-success"> Full Stack Developer</p>
            <div className="">
              <Link to="/contact">
                <button className="btn btn-dark">Contact Me</button>
              </Link>
              <a
                href="/Assets/myresume.pdf" // Replace with the actual file path
                download="myresume.pdf"
                target="_blank" // Optional: Open the file in a new tab/window
                rel="noopener noreferrer" // Required when using target="_blank"
              >
                <button className="btn btn-success m-2">Get Resume</button>
              </a>
              <h5 className="text-success mt-3">{myTime}</h5>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/Oladokun Adeyinka">
              <FaFacebook className="mx-2" />
            </a>

            <a href="https://www.Twitter.com/@chris_adeyinka">
              <FaTwitterSquare className="mx-2" />
            </a>

            <a href="https://www.linkedin.com/in/oladokun-adeyinka-bbb036279">
              <FaLinkedin className="mx-2" />
            </a>
          </div>
        </Col>
        <Col>
          <Image
            src={image1}
            height={200}
            className="pro-pic"
            style={{ borderRadius: "50%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Body1;
