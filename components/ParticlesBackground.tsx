'use client';
    
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        // interactivity: {
        //   events: {
        //     onHover: {
        //       enable: true,
        //       mode: "grab",
        //     },
        //   },
        //   modes: {
        //     grab: {
        //       distance: 140,
        //       links: {
        //         opacity: 0.5
        //       }
        //     }
        //   }
        // },
        particles: {
          color: {
            value: ["#ffffff", "#87ceeb", "#e6e6fa", "#ffd700"],
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "out",
            },
            random: true,
            speed: { min: 0.1, max: 0.5 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
              minimumValue: 0.1,
            },
            value: { min: 0.1, max: 1 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              minimumValue: 0.1,
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.1,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;