import type { MetaFunction } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { ProjectListItem } from "~/components/ProjectListItem";
import { liveProjects, comingSoonProjects } from "~/data/projects";
import backgroundPurple from "~/assets/backgrounds/grid-purple.png";
import logoPurple from "~/assets/logos/ta-purple.gif";
import styles from "./projects.module.css";

export const meta: MetaFunction = () => [{ title: "PROJECTS" }];

const THEME = { color: "#b967ff", image: logoPurple };

export default function Projects() {
  const allProjects = [...liveProjects, ...comingSoonProjects];

  return (
    <div className={styles.projects} style={{ backgroundImage: `url(${backgroundPurple})` }}>
      <Topbar image={THEME.image} gif="projects" color={THEME.color} />

      <div className={styles.list}>
        {allProjects.map((project, i) => (
          <ProjectListItem
            key={project.title}
            link={project.link}
            image={project.image}
            title={project.title}
            titleJap={project.titleJap}
            isLeft={i % 2 === 0}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
