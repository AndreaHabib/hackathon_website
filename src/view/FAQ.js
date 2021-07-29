import React from "react";

export default function FAQ() {
  return (
    <>
      <div id="section4">
        <h1 className="title">Frequently Asked Questions</h1>
        <div id="section4_container">
          <div className="column">
            <div id="text">
              <h2>What is a Hackathon?</h2>
              <p id="paragraph">
                A hackathon is a creative event where Hackers, such as yourself,
                are interested in solving problems in today's world by working
                together and share ideas. Participants will work on a software
                or hardware project where they will later submit for judging.
                Winners win prizes and get to brag about it!
              </p>
            </div>
            <div id="text">
              <h2>
                I am still a freshman! Can I still attend without experience?
              </h2>
              <p id="paragraph">
                Of course you can! This hackathon specifically is designed to
                accomodate all skills levels, including freshmen, as well as a
                category for those skills levels. You can for a team and come up
                with an amazing project!
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
    </>
  );
}
