import NavBar from "../components/Navigation/sideBar";
import Header from "../components/Navigation/Header"
import HeroComponent from "../components/Main/homepage";

export default function Home() {
  return <div className="editorial-page"><Header title="Portfolio" /><NavBar /><HeroComponent /></div>
}
