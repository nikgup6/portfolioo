import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/3d.jpg";
import projImg2 from "../assets/img/greencab.png";
import projImg3 from "../assets/img/transcribe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects = [
    {
      title: "2D images to 3D models",
      description: "Built a model to convert 2D images to 3D models using OpenCV and 3D rendering.",
      imgUrl: projImg1,
    },
    {
      title: "Sustainable transportation",
      description: "A platform to optimize private transportation (eg- cabs) enabling users to choose the fuel type of the ride.",
      imgUrl: projImg2,
    },
    {
      title: "Transcribe glasses",
      description: "Cnverts the speech to text and displays it on the glasses. It is useful for the people who are deaf to actively participate in a converstation",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Designed and implemented various AI and ML-based projects, focusing on real-world applications. Projects include NLP-based transcription, cybersecurity solutions, 3D model generation, and sustainable transportation optimization. Developed AI-driven web platforms for NGOs and businesses, integrating advanced technologies for enhanced user experience and automation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="project-container">
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
                      </div>
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