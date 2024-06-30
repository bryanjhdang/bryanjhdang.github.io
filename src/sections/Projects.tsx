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
    <div id="projects" className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <SectionTitle title="PROJECTS" />

        <div>
          <p>Past Your Peak</p>
          <p>A game made for the Mountain Top Game Jam 2023. It's a reverse rogue-like game where you lose powers as you progress through the stages, meant to represent how you 'peaked' as the theme. It ended up winning the Creativity Award ($200).</p>
          <div>
            <p>Unity</p>
          </div>
          <div>
            <p>View Project</p>
            <p>Git Repo</p>
          </div>
        </div>

      </SectionWrapper>
    </div>
  )
}