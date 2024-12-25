import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shankar Birajdar </span>
            from <span className="purple"> Pune </span>,
            India.
            <br />
            <br />
            I am an aspiring Full Stack Developer with a strong foundation in web technologies and a passion for building scalable and user-centric applications
            <br />
            <br />
            I have completed my Bsc in Computer Science at Fergusson College Pune.

            <br />
            <br />
            I am a quick learner and enjoy solving complex problems, collaborating with teams, and staying up-to-date with modern web development trends

            <br />
            <br />
            Currently, I am seeking opportunities to contribute to innovative projects while continuing to grow as a developer. I am particularly interested in working on challenging projects that require a mix of backend and frontend expertise
            <br />
            <br />

          </p>




        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
