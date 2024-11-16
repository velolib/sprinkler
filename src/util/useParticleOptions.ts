import { useMemo } from 'react';
import { MoveDirection, OutMode } from "@tsparticles/engine";


export function useParticlesOptions() {
    return useMemo(() => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 420,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: {
            min: 0.05,
            max: 0.12
          },
          straight: false,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.875,
            sync: false,
            value: {
              min: 0.5,
              max: 1
            }
          },
          value: { min: 0.09, max: 0.8 },
        },
        size: {
          value: { min: 0.8, max: 3 },
        },
        color: {
          value: [
            '#ccd9ff',
            '#d9e6ff',
            '#f1f5ff',
            '#ffffff',
            '#fffaf5',
            '#ffe4c4',
            '#ffdd9f'
          ]
          
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      }
    }), []);
  }
  
  