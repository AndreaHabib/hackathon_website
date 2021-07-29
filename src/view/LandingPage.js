import React from "react";

export default function LandingPage() {
  return (
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
        <a
          style={{ marginLeft: "10px" }}
          id="button"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          DevPost
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
  );
}
