import React from "react";

export default function Team() {
  return (
    <div id="section5">
      <h1 className="title">Meet the Organizers</h1>
      <a
        rel="noreferrer"
        href="https://hack-a-project.netlify.app/"
        target="_blank"
        className="clubName"
      >
        Hack-A-Project
      </a>
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
  );
}
