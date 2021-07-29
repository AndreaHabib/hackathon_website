import React from "react";
import "../style/index.css";
import {
  LandingPage,
  About,
  Skills,
  FAQ,
  NavBar,
  Particles,
  Footer,
  Team,
  Sponsors,
} from "./index";

function IndexPage() {
  return (
    <>
      <NavBar />
      <Particles />
      <main id="container">
        <LandingPage />
        <About />
        <Skills />
        <FAQ />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
