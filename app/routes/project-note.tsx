import type { MetaFunction } from "react-router";
import { Link, useParams } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { comingSoonProjects } from "~/data/projects";
import backgroundPurple from "~/assets/backgrounds/grid-purple.png";
import logoPurple from "~/assets/logos/ta-purple.gif";
import styles from "./project-note.module.css";

const THEME = { color: "#b967ff", image: logoPurple };

export const meta: MetaFunction = ({ params }) => {
  const project = comingSoonProjects.find((p) => p.slug === params.slug);
  return [{ title: project ? project.title.toUpperCase() : "PROJECTS" }];
};

export default function ProjectNote() {
  const { slug } = useParams();
  const project = comingSoonProjects.find((p) => p.slug === slug);

  return (
    <div className={styles.projectNote} style={{ backgroundImage: `url(${backgroundPurple})` }}>
      <Topbar image={THEME.image} gif="projects" color={THEME.color} />

      {project ? (
        <>
          <div className={styles.titleBlock}>
            <div>{project.title}</div>
            <div>{project.titleJap}</div>
          </div>
          <div className={styles.box}>
            <div className={styles.notes}>
              {project.notes || "No notes yet."}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.titleBlock}>
          <div>not found</div>
        </div>
      )}

      <Link to="/projects" className={styles.back}>
        &larr; BACK TO PROJECTS
      </Link>

      <Footer />
    </div>
  );
}
