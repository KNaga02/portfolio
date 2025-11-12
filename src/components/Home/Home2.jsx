import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate <b className="purple">Frontend Developer</b> who loves
              transforming creative ideas into clean, responsive, and user-friendly
              web experiences.
              <br />
              <br />
              I have a strong understanding of
              <i>
                <b className="purple">
                  {" "}
                  React.js, JavaScript, HTML5, CSS3, and Tailwind CSS{" "}
                </b>
              </i>
              — and I focus on building visually appealing, functional, and modern
              web interfaces.
              <br />
              <br />
              My main area of interest is developing
              <i>
                <b className="purple"> Interactive Web Applications </b>
              </i>
              that are fast, intuitive, and accessible on all devices.
              <br />
              <br />
              I enjoy crafting reusable components, working with design systems, and
              ensuring seamless user experiences using modern frontend technologies
              like{" "}
              <b className="purple">React.js</b>,{" "}
              <b className="purple">Tailwind CSS</b>, and{" "}
              <b className="purple">Bootstrap</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
