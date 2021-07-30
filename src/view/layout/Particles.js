import React from "react";
import Particles from "react-particles-js";

export default function ParticlesContainer() {
  return (
    <Particles
      className="particles"
      height="100vh"
      width="100vw"
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
  );
}
