import React from "react";
import "../style/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "react-particles-js";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import {
  faUserFriends,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function IndexPage() {
  return (
    <>
      <Nav className="justify-content-center nav">
        <Nav.Item>
          <Link to="section2" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              About <FontAwesomeIcon icon={faInfoCircle} size="1x" />
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="section4" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              FAQ <FontAwesomeIcon icon={faQuestionCircle} size="1x" />
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="section5" spy={true} delay={false}>
            <Nav.Link
              className="option"
              style={{ color: "white", textDecoration: "none" }}
            >
              Team <FontAwesomeIcon icon={faUserFriends} size="1x" />
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      <Particles
        className="particles"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.01,
            },
            move: {
              direction: "none",
              speed: 0.1,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 2,
                opacity_min: 0.09,
              },
            },
          },
        }}
      />
      <main id="container">
        <div id="section1">
          <div id="text">
            <h1>HACK CSI</h1>
            <h2>Go above and beyond!</h2>
            <h2>Virtual hackathon hosted by Hack-A-Project!</h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCdXZl1hE-0iPGqkX2KR6xLxD68UqtOcak8oMHbKS1w1HBug/viewform"
              id="button"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now!
            </a>
          </div>
          <div id="img">
            <img
              id="section1_IMG"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1621298915/club_website/HACK_CSI_osq6sh.svg"
              alt="pluto-planet"
            />
          </div>
        </div>
        <div id="section2">
          <h1 className="title">WELCOME TO HACK CSI</h1>
          <div id="section2_container">
            <div id="img1">
              <img
                id="section2_IMG"
                src="https://res.cloudinary.com/andreahabib/image/upload/v1618100237/hackathon/flame-759_1_iiuohv.png"
                alt="spaceman"
              />
            </div>
            <div id="text">
              <h3>
                Throughout our time as Computer Science Students at the College
                of Staten Island, the only opportunity we had for showcasing our
                skills in a hackathon environment is once a year during the CUNY
                Hackathon. Not to mention, many CSI computer science students do
                not get the recognition they they deserve which is where the CSI
                Hackathon comes in. The CSI Hackathon would be open and
                welcoming to all CSI students.
              </h3>
            </div>
          </div>
        </div>
        <div id="section3">
          <h1 className="title">SHOW OFF YOU SKILLS!</h1>
          <div id="section3_container">
            <img
              className="skillsIMG"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1618146852/hackathon/day95-app-development_1_1_luk4mb.png"
              alt="appdev"
            />
            <img
              className="skillsIMG"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1618146714/hackathon/day93-programing_1_ufurus.png"
              alt="programming"
            />
            <img
              className="skillsIMG"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1618146714/hackathon/day94-ui-ux_1_tkb1te.png"
              alt="ui/ux"
            />
          </div>
        </div>
        <div id="section4">
          <h1 className="title">Frequently Asked Questions</h1>
          <div id="section4_container">
            <div className="column">
              <div id="text">
                <h2>What is a Hackathon?</h2>
                <p id="paragraph">
                  A hackathon is a creative event where Hackers, such as
                  yourself, are interested in solving problems in today's world
                  by working together and share ideas. Participants will work on
                  a software or hardware project where they will later submit
                  for judging. Winners win prizes and get to brag about it.
                </p>
              </div>
              <div id="text">
                <h2>
                  I am still a freshman! Can I still attend without experience?
                </h2>
                <p id="paragraph">
                  Of course you can! This hackathon specifically is designed to
                  accomodate all skills levels, including freshmen, as well as a
                  category for those skills levels. You can for a team and come
                  up with an amazing project!
                </p>
              </div>
            </div>
            <div className="column">
              <div id="text">
                <h2>Where will it take place?</h2>
                <p id="paragraph">
                  The event is entirely remote! Most of the activities and
                  interactions will be through a discord server, while the
                  hackathon will be hosted on DevPost.
                </p>
              </div>
              <div id="text">
                <h2>When and how long is the hackathon?</h2>
                <p id="paragraph">
                  The hackathon will take place on Septmeber 3rd 3:30PM to
                  September 5th 11:59PM, and it will run for about 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="planet">
          <img
            id="planetIMG"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1618146326/hackathon/conifer-81_1_bgsk85.png"
            alt="pinkish planet"
          />
        </div>
        <div id="section5">
          <h1 className="title">Meet the Organizers</h1>
          <h3 className="clubName">Hack-A-Project</h3>
          <div id="section5_container">
            <div className="team">
              <div className="row">
                <div className="box">
                  <a
                    href="https://www.linkedin.com/in/andrea-habib-730941198/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="member_image"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1614539664/backup_aurk3d.jpg"
                      alt="member"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="https://www.linkedin.com/in/chengwang5336/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="member_image"
                      src="https://cdn.discordapp.com/attachments/812433734073712681/851909959150731294/image0.png"
                      alt="member"
                    />
                  </a>
                </div>
                <div className="box">
                  <a
                    href="https://www.linkedin.com/in/gabriel-khalfin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="member_image"
                      src="https://res.cloudinary.com/andreahabib/image/upload/v1623170118/club_website/Gabriel-Profile_cvb0sw.jpg"
                      alt="member"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sponsors">
          <h1 className="title">Our Awesome Sponsors!</h1>
          <span id="sponsors_box">
            <img
              alt="github"
              className="sponsor_img"
              src="https://i.gzn.jp/img/2020/11/05/github-source-code-leak/00.png"
            ></img>
            <img
              className="sponsor_img"
              alt="csi"
              src="https://res.cloudinary.com/andreahabib/image/upload/v1627481147/hackathon/College_of_Staten_Island_ld1klc.svg"
            ></img>
          </span>
        </div>
        <footer id="footer">
          <p>&copy; Copyright 2021 HACK-A-PROJECT</p>
        </footer>
      </main>
    </>
  );
}

export default IndexPage;
