import React, { useState } from "react";
import NavBar from "../components/Navigation/sideBar";
import Header from "../components/Navigation/Header"
import AboutComponent from "../components/Main/aboutPage";
// import HeroComponent from "../components/Main/homepage";
import Link from "next/link";


export default function About() {

  const [showMenu, setShowMenu] = useState()

  return (
    <>
      <div className="flex bg-[#212121] relative">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute cursor-pointer hamburger h-6 right-10 text-green-400 top-7 w-6 z-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setShowMenu(!showMenu)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>

          <div
            className={showMenu ?
              "bg-[#212121] flex flex-col hamburger-menu-show h-screen items-center justify-start m-2 p-4 rounded-md w-11/12 z-10" :
              "bg-[#212121] flex flex-col hamburger-menu-hide h-screen items-center justify-start m-2 p-4 rounded-md w-11/12 z-10"
            }
          >
            <div className="bg-[#444] flex flex-col h-32 items-center justify-center rounded-md w-full">
              <Link href="/" passHref={false}>
                <span className="cursor-pointer my-2 text-green-400">Home</span>
              </Link>

              <Link href="/about" passHref={false}>
                <span className="cursor-pointer my-2 text-green-400">About</span>
              </Link>
            </div>
          </div>

          <Header title="About" />
          <NavBar />
          <AboutComponent />
      </div>
    </>
  )
}
