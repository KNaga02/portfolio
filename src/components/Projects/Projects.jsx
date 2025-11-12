import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookStore from "../../Assets/Projects/bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here’s the project I’ve recently built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookStore}
              isBlog={false}
              title="Online Book Store (Frontend)"
              description="A responsive frontend web application built using React.js and Tailwind CSS. The app allows users to browse, search, and filter books online with an intuitive and clean user interface. It includes reusable components, a dynamic book list, and interactive navigation — designed to provide a smooth user experience."
              ghLink="https://github.com/KNaga02"
              demoLink="#" // Add live link if hosted
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
