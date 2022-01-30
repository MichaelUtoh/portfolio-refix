import NavBar from "../components/Navigation/sideBar";
import Header from "../components/Navigation/Header"
import ProjectsComponent from "../components/Main/projectsPage";
// import HeroComponent from "../components/Main/homepage";


export default function Projects() {
  return (
    <>
      <div className="flex bg-[#212121]">
        <Header title="Projects" />
        <NavBar />
        <ProjectsComponent />
      </div>
    </>
  )
}
