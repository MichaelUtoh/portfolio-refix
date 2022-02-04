import NavBar from "../components/Navigation/sideBar";
import Header from "../components/Navigation/Header"
import HeroComponent from "../components/Main/homepage";


export default function Home() {
  return (
    <>
      <div className="flex bg-[#212121] relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute cursor-pointer hamburger h-6 right-10 text-green-300 top-7 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <Header title="Home" />
        <NavBar />
        <HeroComponent />
      </div>
    </>
  )
}
