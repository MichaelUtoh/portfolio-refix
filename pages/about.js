import NavBar from "../components/Navigation/sideBar";
import Header from "../components/Navigation/Header"
import AboutComponent from "../components/Main/aboutPage";
// import HeroComponent from "../components/Main/homepage";


export default function About() {
  return (
    <>
      <div className="flex bg-[#212121]">
        <Header title="About" />
        <NavBar />
        <AboutComponent />
      </div>
    </>
  )
}
