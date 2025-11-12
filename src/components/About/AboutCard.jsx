import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Kambala Naga Veerendra Kumar</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I’m a passionate{" "}
            <span className="purple">Software Developer</span> and{" "}
            <span className="purple">Frontend Developer</span> who loves
            building clean, modern, and user-friendly web applications.
            <br />
            <br />
            I focus on crafting smooth user experiences using technologies like{" "}
            <span className="purple">
              React.js, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap
            </span>
            .
            <br />
            <br />
            Apart from coding, I enjoy spending my time learning new things and
            working on projects that help me grow as a developer.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing Interactive Web Apps 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Modern UI/UX Designs 🎨
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with creativity and passion — every line matters!"{" "}
          </p>
          <footer className="blockquote-footer">
            Kambala Naga Veerendra Kumar
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
