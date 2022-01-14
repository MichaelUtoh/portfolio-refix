import NavBar from "../components/Navigation/NavBar";
import Header from "../components/Navigation/Header"
import HeroComponent from "../components/Main/Homepage";


export default function Home() {
  return (
    <>
      <Header title="Home" />
      <NavBar />
      <HeroComponent />
    </>
  )
}
