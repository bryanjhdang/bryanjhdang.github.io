import { SectionTitle } from "./SectionComponents"
import { projectData } from "../assets/files/projectData"

interface ProjectInfo {
  name: string,
  description: string,
  imageLink: string,
  projectLink: string,
  githubLink: string | null,
  type: string,
  tags: string[]
}

function Project({ project }: { project: ProjectInfo }) {
  return (
    <a href={project.projectLink} target="_blank">
      <div className="group flex sm:flex-row flex-col gap-10 p-6 border rounded-md shadow hover:shadow-lg bg-white" >
        
        <div className="basis-1/4">
          <img src={project.imageLink} alt={project.name} className="w-full object-cover" />
        </div>

        <div className="flex-1">
          
          <div className="pb-4">
            <p className="text-xl font-semibold pb-4">{project.name}</p>
            <p className="text-base">{project.description}</p> 
          </div>

          <div className="flex flex-row flex-wrap gap-2 pb-4">
            <p className="badge badge-primary badge-outline">{project.type}</p>
            {project.tags.map((element, index) => (
              <p key={index} className="badge badge-secondary badge-outline">{element}</p>
            ))}
          </div>

          {/* <div>
            {project.projectLink && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="link mr-5">
                View Project
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link mr-5">
                Git Repo
              </a>
            )}
          </div> */}
        
        </div>
      </div>
    </a>
  )
}


export default function Projects() {
  return (
    <div id="projects" className="pt-20 pb-20 border-none">
      <SectionTitle title="PROJECTS" />
      <div className="grid grid-cols-1 gap-10">
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  )
}