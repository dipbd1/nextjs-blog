import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

//importing particles
import Particles from "react-tsparticles"

const name = "Dip jsGuy"
const particlOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "#ffffff",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: false,
        mode: "connect",
        parallax: {
          enable: false,
          force: 1,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#192dc8",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      decay: 0,
      distance: 0,
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 80,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 1,
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        character: {
          value: ["t", "s", "P", "a", "r", "t", "i", "c", "l", "e", "s"],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true,
        },
        char: {
          value: ["t", "s", "P", "a", "r", "t", "i", "c", "l", "e", "s"],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true,
        },
      },
      type: "char",
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 16,
      animation: {
        count: 0,
        enable: false,
        speed: 10,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 10,
      },
    },
    stroke: {
      width: 1,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: 50,
    },
    zIndex: 0,
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
}

export const siteTitle = "Dip's Blog"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Particles
        id="tsparticles"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        options={particlOptions}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
