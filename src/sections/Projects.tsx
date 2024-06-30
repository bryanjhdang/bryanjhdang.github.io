import { SectionTitle, SectionWrapper } from "../components/SectionComponents"

interface ProjectInfo {
  title: String,
  description: String,
  tools: String[],
  website?: String | null,
  repo?: String | null,
  article?: String | null
}

function ProjectTemplate(projectInfo: ProjectInfo) {
  return (
    <>
      <p>{projectInfo.title}</p>
    </>
  )
}

export default function Projects() {
  return (
    <div className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <SectionTitle title="PROJECTS" />
        <div>
          <p>Critter</p>
          <p>An online character sheet for the tabletop RPG Mausritter. This is a game where you have inventory slots in a "Resident Evil" style grid, and it was a total pain to manage those physically. I wouldn't say it beats the original at all (pen and paper is always the most fun), but it sure beats scuffed cutouts.</p>
          <p>I used React, NodeJS, and Firebase to build this project.</p>
          <p>View Project</p>
        </div>
      </SectionWrapper>
    </div>
  )
}