import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../Assets/image1.JPG'
const About = () => {
    
  return (
    <Container className="about">
      <h4>
        <b>About Me</b>
      </h4>
      <div>
        <div className='mt-3'>
      <img src={img1} 
       height={200}
       alt="My Pic"
       style={{borderRadius:'50%'}}
      />
        </div>
      </div>
      
          <div className="mt-5 text-dark">
            <p>I am a passionate Full-Stack Developer with a strong expertise in JavaScript, React, MySQL, Express, Apollo, GraphQL, and Node.js, dedicated to building dynamic and scalable web applications. With extensive experience in front-end development using React, I craft intuitive and responsive user interfaces that enhance user engagement and satisfaction. My back-end skills in Node.js and Express enable me to develop robust and efficient server-side applications that seamlessly integrate with various databases and APIs.

I specialize in using GraphQL and Apollo to design and implement flexible and powerful APIs, ensuring efficient data retrieval and manipulation for complex applications. Proficient in MySQL, I manage and optimize relational databases to ensure data integrity and high performance for large-scale applications. My full-stack expertise allows me to understand and navigate both front-end and back-end challenges, providing comprehensive solutions that meet client and user needs.

Committed to continuous learning and staying updated with the latest technologies, I strive to deliver cutting-edge solutions and contribute to the success of innovative projects.
            </p>
         
          </div>
          <div> 
            <Link to="/contact">
              <button className="btn btn-dark ">Contact Me</button>
            </Link>
            <a
              href="myresume.pdf"
              download="myresume.pdf"
            >
              <button className="btn btn-success mx-2">Get Resume</button>
            </a>
          </div>
    
    </Container>
  );
};

export default About;
