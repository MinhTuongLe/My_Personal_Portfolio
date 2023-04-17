import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "W3 Band",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg1,
    },
    {
      title: "Shop",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg2,
    },
    {
      title: "W3 School",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg3,
    },
    {
      title: "Fullscreen API Attack",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg4,
    },
    {
      title: "Form Validation II",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg5,
    },
    {
      title: "Form Validation I",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg6,
    },
    {
      title: "Tabs UI",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg7,
    },
    {
      title: "Music Player",
      description: "HTMl, CSS & Javascript",
      imgUrl: projImg8,
    },
    {
      title: "Porfolio",
      description: "HTMl, CSS",
      imgUrl: projImg9,
    },
    {
      title: "MovieLand",
      description: "HTML, CSS, ReactJS, Responsive Web Design",
      imgUrl: projImg10,
    },
    {
      title: "Portfolio Upgrade",
      description: "HTML, CSS, ReactJS",
      imgUrl: projImg11,
    },
    {
      title: "Personal Portfolio",
      description: "HTML, CSS, ReactJS, Responsive Web Design & Bootstrap",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the web projects I've been working on while learning web development over the past few months.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This slide currently has no information to display. I will add in the future if available.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This slide currently has no information to display. I will add in the future if available.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
