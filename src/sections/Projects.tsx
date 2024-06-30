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
          <div>

          </div>
          <div>
            <div className="pb-5">
              <p className="text-xl font-semibold pb-2">Past Your Peak</p>
              <p className="text-base">A game made for the Mountain Top Game Jam 2023. It's a reverse rogue-like game where you lose powers as you progress through the stages, meant to represent how you 'peaked' as the theme. It ended up winning the Creativity Award ($200).</p>
            </div>
            <div className="pb-5">
              <p className="text-base">Stuff used:</p>
              <ul className="list-disc list-inside text-base">
                <li>Unity</li>
              </ul>
            </div>
            <div>
              <a href="https://bryd.itch.io/past-your-peak" target="_blank" className="text-base text-blue-600 underline mr-5">View Project</a>
              <a href="https://github.com/lucastmah/Mute_Jammers" target="_blank" className="text-base text-blue-600 underline mr-5">Git Repo</a>
            </div>
          </div>
        </div>

      </SectionWrapper>
    </div>
  )
}