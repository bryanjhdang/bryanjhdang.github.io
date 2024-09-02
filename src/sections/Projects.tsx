import { SectionTitle } from "../components/SectionComponents"
import { projectData } from "../assets/files/projectData"

interface ProjectInfo {
  name: string,
  description: string,
  imageLink: string,
  projectLink: string | null,
  githubLink: string | null,
  type: string,
  tags: string[]
}

function Project({ project }: { project: ProjectInfo }) {
  return (
    <>
      <div className="flex sm:flex-row flex-col gap-10">
        
        <div className="basis-1/4">
          <img src={project.imageLink} alt={project.name} className="w-full object-cover" />
        </div>

        <div className="flex-1">
          
          <div className="pb-5">
            <p className="text-xl font-semibold pb-2">{project.name}</p>
            <p className="text-base">{project.description}</p>
          </div>

          <div>
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-base underline mr-5">
                View Project
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-base underline mr-5">
                Git Repo
              </a>
            )}
          </div>
        
        </div>
      </div>
    </>
  )
}


export default function Projects() {
  return (
    <div id="projects" className="pt-20 pb-20 border-none">
      <SectionTitle title="PROJECTS" />
      <div className="grid gap-24 sm:gap-28">
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}