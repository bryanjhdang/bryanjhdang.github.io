import { SectionTitle, SectionWrapper } from "../components/SectionComponents"
import PastYourPeakImg from "../assets/images/past-your-peak.png"
import PawsImg from "../assets/images/paws.png"
import BoneyardImg from "../assets/images/boneyard.png"

// interface ProjectInfo {
//   title: String,
//   description: String,
//   tools: String[],
//   website?: String | null,
//   repo?: String | null,
//   article?: String | null
// }

// Actually implement this lol (can leave it hard coded for now)
// function ProjectTemplate(projectInfo: ProjectInfo) {
//   return (
//     <>
//       <p>{projectInfo.title}</p>
//     </>
//   )
// }

// function TemporaryProjectTemplate() {
//   return (
//     <div className="flex sm:flex-row flex-col gap-10">
//       <div className="basis-1/4">
//         <img src="" alt=" " className="object-cover" />
//       </div>
//       <div className="flex-1">
//         <div className="pb-5">
//           <p className="text-xl font-semibold pb-2 text-white">Title</p>
//           <p className="text-base">Description</p>
//         </div>
//         <div className="pb-5">
//           <p className="text-base">Tools used <span className="font-semibold text-white">Specific one used</span></p>
//         </div>
//         <div>
//           <a href="" target="_blank" className="text-base text-white underline mr-5">View Project</a>
//           <a href="" target="_blank" className="text-base text-white underline mr-5">Git Repo</a>
//           <a href="" target="_blank" className="text-base text-white underline mr-5">Blog Post</a>
//         </div>
//       </div>
//     </div>
//   )
// }

function PastYourPeak() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div className="basis-1/4">
        <img src={PastYourPeakImg} alt="Past Your Peak" className="w-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Past Your Peak</p>
          <p className="text-base">A game made for the Mountain Top Game Jam 2023. It's a reverse rogue-like game where you lose powers as you progress. With a theme of 'peak', it's about how you peak in life. It won the Creativity Award ($200).</p>
        </div>
        {/* <div className="pb-5">
          <p className="text-base">We used Unity where I programmed some of the enemy behavior to attack and chase down the player, put the levels together, and used Aseprite to create most of the assets.</p>
        </div> */}
        <div>
          <a href="https://bryd.itch.io/past-your-peak" target="_blank" className="text-base underline mr-5">View Project</a>
          <a href="https://github.com/lucastmah/Mute_Jammers" target="_blank" className="text-base underline mr-5">Git Repo</a>
        </div>
      </div>
    </div>
  )
}

function BoneyardOfTheInnocent() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div className="basis-1/4">
        <img src={BoneyardImg} alt="Boneyard of the Innocent" className="w-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Boneyard of the Innocent</p>
          <p className="text-base">Made for the Godot Wild June 2024 Jam which had the theme of 'folklore', this is a puzzle platformer game where you try to outsmart and kill a Wendigo creature by a combination of puzzles and interactions across playthroughs.</p>
        </div>
        {/* <div className="pb-5">
          <p className="text-base">My team used Godot to create the game where I worked on the puzzle item interactions like switches, levers, doors, platforms, and teleporters. I also worked on the UI for the main menu and the level design. </p>
        </div> */}
        <div>
          <a href="https://0strategist0.itch.io/boneyard-of-the-innocent" target="_blank" className="text-base underline mr-5">View Project</a>
          <a href="https://github.com/0Strategist0/GodotWildJam" target="_blank" className="text-base underline mr-5">Git Repo</a>
        </div>
      </div>
    </div>
  )
}

function Paws() {
  return (
    <div className="flex sm:flex-row flex-col gap-10">
      <div className="basis-1/4">
        <img src={PawsImg} alt="Paws" className="w-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="pb-5">
          <p className="text-xl font-semibold pb-2">Paws</p>
          <p className="text-base">A time tracking web app to keep track of all of your tasks and log them. Has productivity features like a to-do list, studying together with others, and an economy where you gain coins by using the timer to buy cute cat GIFs.</p>
        </div>
        {/* <div>
          <p className="text-base">We used React for the front-end and Mantine UI as a component library to create the UI elements. Our back-end used NodeJS / ExpressJS to create HTTP endpoints in order to store the time tracking data inside of a Firestore database.</p>
        </div> */}
        <div className="pt-5">
          <a href="https://github.com/bryanjhdang/tempify" target="_blank" className="text-base underline mr-5">Git Repo</a>
        </div>
      </div>
    </div>
  )
}




export default function Projects() {
  return (
    <div id="projects" className="pt-20 pb-20 border-none">
      <SectionWrapper>
        <SectionTitle title="PROJECTS" />
        <div className="flex flex-col gap-24 sm:gap-36">
          <Paws />
          <BoneyardOfTheInnocent />
          <PastYourPeak />
        </div>
      </SectionWrapper>
    </div>
  )
}