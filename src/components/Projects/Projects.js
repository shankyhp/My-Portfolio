import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newssipper from "../../Assets/Projects/news-sipper.png"
import textutils from "../../Assets/Projects/text-util.png"
import simon from "../../Assets/Projects/simon.png"
import Ecommerce from '../../Assets/Projects/E-commerce.png'
import inotebook from '../../Assets/Projects/I-notebook.png'
import soda from '../../Assets/Projects/soda.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="In this E-Commerce website project, user can explore products, filer and short the product and user can add the product in cart by selecting product variant like size. User can also order the product by providing the delivery address and using any Payment method either Cash on Delivery or Online payment.In this Project I have added a admin panel where i can manage the product adding functionality and also changing the order status"
              ghLink="https://github.com/shankyhp/E-Commerce-React"
              demoLink="https://forever-frontend-roan-seven.vercel.app/"  //add link if u host your websites

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soda}
              isBlog={false}
              title="3D-Soda Can Landing page"
              description="Slurpy-A Can Drink is a modern, interactive landing page website designed for a soda-based company. The project combines engaging 3D animations and modules with a clean and responsive UI to create a delightful user experience. It is my first animated website using the magic of GSAP and Three JS. Special thanks to React Three Drei for providing fully functional abstractions for @react-three/fiber."
              ghLink="https://github.com/shankyhp/slurpy"
              demoLink="https://slurpy-gamma.vercel.app/"  //add link if u host your websites

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="I-Notebook"
              description="I-NoteBook is a full-stack web application designed to
manage personal notes securely and efficiently. Built using React.js for the
frontend and Node.js with Express.js for the backend, the application
provides a seamless user experience for creating, reading, updating, and
deleting notes. Data persistence is handled through MongoDB, ensuring reliable and scalable storage"
              ghLink="https://github.com/shankyhp/I-Notebook"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newssipper}
              isBlog={false}
              title="News-Sipper"
              description="News-Sipper is a real-time news aggregation platform that
allows users to browse the latest headlines across various categories like
Business, Entertainment, Health, Science, Sports, and Technology. Built using
React.js for the frontend, the application fetches news from an external API
and delivers a seamless, dynamic user experience with infinite scrolling and
category-based filtering."
              ghLink="https://github.com/shankyhp/News-Sipper"
            // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Text-Utils"
              description="TextUtils is a React-based application designed for efficient text manipulation. It provides a user-friendly text field where users can enter or paste their text and perform various operations such as converting text to uppercase or lowercase, removing extra spaces, clearing the entire text, copying the text to the clipboard, and even downloading the text as a file. This versatile tool is ideal for simplifying text formatting tasks in a quick and convenient way."
              ghLink="https://github.com/shankyhp/MyTextUtil"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon Game"
              description="Simon Game is an interactive and engaging memory-based game built with jQuery, HTML, and CSS. Designed with responsive layouts and smooth animations, the game challenges users to replicate an increasingly complex sequence of sounds and corresponding key presses. With each correct response, the difficulty increases, offering an exciting way to test and improve memory skills. The combination of vibrant visuals and immersive sound effects ensures a fun and intuitive user experience"
              ghLink="https://github.com/shankyhp/Simon-Game"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
