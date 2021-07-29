import React from "react";

export default function Sponsors() {
  return (
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
      <span id="sponsors_box">
        <img
          className="sponsor_img"
          alt="ph"
          src="https://www.projecthospitality.org/wp-content/uploads/2018/02/PH-logo-white.png"
        ></img>
      </span>
    </div>
  );
}
