import type { MetaFunction } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import backgroundPurple from "~/assets/backgrounds/grid-purple.png";
import logoPurple from "~/assets/logos/ta-purple.gif";
import step0 from "~/assets/mixer/step0.gif";
import step1 from "~/assets/mixer/step1.jpg";
import step2 from "~/assets/mixer/step2.jpg";
import step3 from "~/assets/mixer/step3.jpg";
import step4 from "~/assets/mixer/step4.jpg";
import step5 from "~/assets/mixer/step5.jpg";
import styles from "./mixer.module.css";

export const meta: MetaFunction = () => [{ title: "Karl Klomp Mixer" }];

const THEME = { color: "#b967ff", image: logoPurple };

const SECTIONS = [
  {
    title: "Karl Klomp Dirty Video Mixer (GCC Edition)",
    pic: step0,
    text:
      "Karl Klomp is an audiovisual designer who has created a number of cool gadgets for live performance visuals. One of these is dubbed the Dirty Video Mixer. This device " +
      "takes in two composite visual inputs and mixes them together to create trippy and glitchy effects. I had never seen anything like this before so I decided to make one " +
      "for myself! If you want to learn more about Karl Klomp, then check out their ",
    hasSiteLink: true,
  },
  {
    title: "Components",
    pic: step1,
    text:
      "The components for the Dirty Visual Mixer are nothing too complex. All that is needed is a set of three RCA inputs, two toggle switches, a 1k potentiometer, and " +
      "wire/solder to connect it all together. I got the RCA ports from an old TV I tore apart one day, the toggle switches from a local hardware store, and the rest off of " +
      "Amazon. It probably would have been easier to just get everything from Amazon or Ebay, but I enjoyed dismantling some old gadgets to see what I could salvage from them.",
  },
  {
    title: "Initial Setup",
    pic: step2,
    text:
      "My first attempt at putting the mixer together was done on some old cardboard. I did this so I could test that all my components worked and that I could successfully " +
      "solder them together (I had never soldered before this project). You can google some schematics for the wiring, but essentially each video signal is output to each switch " +
      "and the switches are output to the potentiometer. The potentiometer then controls the amount of each video signal that gets displayed to the main output, creating the glitches. " +
      "This trial run was a success, although my soldering was pretty shoddy and some connections snapped when I was testing the rig out...",
  },
  {
    title: "Choosing A Container",
    pic: step3,
    text:
      "Now that I knew I could create the mixer, I thought it would be a novel challenge to try and put it in a controller shell. I initially wanted to use a N64 controller. After " +
      "taking it apart, though, I was surprised to find very little space in the shell itself. So I dug up a broken GameCube controller a friend had given me and scoped out the " +
      "dimensions. I was happy to find much more space than in the N64 controller. The button spaces were larger and the rumble pack attached to the motherboard made it so the shell " +
      "gave plenty of room for wiring. I sketched out the schematics and got to work!",
  },
  {
    title: "Building The Controller",
    pic: step4,
    text:
      "The button/stick spaces in the GameCube controller seemed to naturally fit my components. I only had to cut out a few bits of plastic to get the potentiometer to fit in the " +
      "D-pad space. I super glued the switches to the trigger openings and the RCA output to the C-stick area. Then I started making the wire connections. After I connected " +
      "everything attached to the base, I added the final two RCA ports on top of the switches and soldered them in. This process was much more involved than my trial run because of the controller's " +
      "space constraints. However, I had gotten the hang of soldering and my connections were much more secure. The only thing left was to screw the top of the shell back on.",
  },
  {
    title: "GAME SET!",
    pic: step5,
    text:
      "Everything worked as expected! I just had to be careful when plugging the RCA cables into the rig, since the super glued ports weren't the " +
      "strongest. I've used this mixer to create the gifs you see at the top of the each page. Hope you enjoy!",
  },
];

export default function Mixer() {
  const breakpoint = useBreakpoint();

  return (
    <div className={styles.mixer} style={{ backgroundImage: `url(${backgroundPurple})` }}>
      <Topbar image={THEME.image} gif="projects" color={THEME.color} />

      {SECTIONS.map((section) => (
        <div key={section.title} className={styles.section}>
          <p className={styles.titleText}>{section.title}</p>
          <div className={breakpoint.mdAndUp ? styles.picDesktop : styles.picMobile}>
            <img className={styles.picImg} src={section.pic} alt={section.title} />
          </div>
          <div className={breakpoint.mdAndUp ? styles.boxDesktop : styles.boxMobile}>
            <div className={styles.text}>
              {section.text}
              {section.hasSiteLink && (
                <a href="https://www.karlklomp.nl/" target="_blank" rel="noreferrer">
                  site.
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
