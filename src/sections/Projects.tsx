import { SectionTitle, SectionWrapper } from "../components/SectionComponents"

interface ProjectInfo {
  title: String,
  description: String,
  tools: String[],
  website?: String | null,
  repo?: String | null,
  article?: String | null
}

// Actually implement this lol (can leave it hard coded for now)
function ProjectTemplate(projectInfo: ProjectInfo) {
  return (
    <>
      <p>{projectInfo.title}</p>
    </>
  )
}

function TemporaryProjectTemplate() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div>
        <img src="" alt=" " width={800} />
      </div>
      <div>
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Title</p>
          <p className="text-base">Description</p>
        </div>
        <div className="pb-5">
          <p className="text-base">Tools used <span className="font-semibold text-blue-500">Specific one used</span></p>
        </div>
        <div>
          <a href="" target="_blank" className="text-base text-blue-600 underline mr-5">View Project</a>
          <a href="" target="_blank" className="text-base text-blue-600 underline mr-5">Git Repo</a>
          <a href="" target="_blank" className="text-base text-blue-600 underline mr-5">Blog Post</a>
        </div>
      </div>
    </div>
  )
}

function PastYourPeak() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div className="basis-1/4">
        <img src="src/assets/past-your-peak.png" alt="Past Your Peak" className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Past Your Peak</p>
          <p className="text-base">A game made for the Mountain Top Game Jam 2023. It's a reverse rogue-like game where you lose powers as you progress. With a theme of 'peak', it was meant to represent how you peaked in life and the only way left is down. It ended up winning the Creativity Award ($200).</p>
        </div>
        <div className="pb-5">
          <p className="text-base">We used <span className="font-semibold text-blue-500">Unity</span> where I programmed some of the enemy behavior to attack / chase down the player and made the levels, and used <span className="font-semibold text-blue-500">Aseprite</span> to create most of the assets.</p>
        </div>
        <div>
          <a href="https://bryd.itch.io/past-your-peak" target="_blank" className="text-base text-blue-600 underline mr-5">View Project</a>
          <a href="https://github.com/lucastmah/Mute_Jammers" target="_blank" className="text-base text-blue-600 underline mr-5">Git Repo</a>
        </div>
      </div>
    </div>
  )
}

function BoneyardOfTheInnocent() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div className="basis-1/4">
        <img src="src/assets/boneyard.png" alt="Boneyard of the Innocent" className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Boneyard of the Innocent</p>
          <p className="text-base">Made for the Godot Wild June 2024 Jam which had the theme of 'folklore', this is a puzzle platformer game where you try to outsmart and kill a Wendigo creature by a combination of puzzles and permanent interactions across playthroughs.</p>
        </div>
        <div className="pb-5">
          <p className="text-base">My team used <span className="font-semibold text-blue-500">Godot</span> to create the game where I worked on the puzzle item interactions like switches, levers, doors, platforms, and teleporters. I also did work on the UI and level design. </p>
        </div>
        <div>
          <a href="https://0strategist0.itch.io/boneyard-of-the-innocent" target="_blank" className="text-base text-blue-600 underline mr-5">View Project</a>
          <a href="https://github.com/0Strategist0/GodotWildJam" target="_blank" className="text-base text-blue-600 underline mr-5">Git Repo</a>
        </div>
      </div>
    </div>
  )
}



export default function Projects() {
  return (
    <div id="projects" className="pt-10 sm:pt-20 pb-10 sm:pb-20">
      <SectionWrapper>
        <SectionTitle title="PROJECTS" />
        <div className="flex flex-col gap-28">
          <BoneyardOfTheInnocent />
          <PastYourPeak />
        </div>
      </SectionWrapper>
    </div>
  )
}