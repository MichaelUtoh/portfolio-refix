import NavBar from "../components/Navigation/NavBar";
import Header from "../components/Navigation/Header"
import HeroComponent from "../components/Main/homepage";


export default function Home() {
  return (
    <>
      <div className="flex bg-[#212121]">
        <Header title="Home" />
        <NavBar />
        <HeroComponent />
      </div>
    </>
  )
}
