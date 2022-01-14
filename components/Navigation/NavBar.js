import React from 'react'

const NavBar = () => {
    return (
        <div className="border-b-custom lg:w-full mx-auto  p-2 text-white">
            <div className="items-baseline flex justify-between lg:w-10/12 p-2 mx-auto">
                <h1 className="text-white font-one font-thin text-xl">Michael Utoh</h1>
                <ul className="flex justify-between">
                    <li className="ml-6 font-thin cursor-pointer hover:text-blue-300 text-sm"><a>About</a></li>
                    <li className="ml-6 font-thin cursor-pointer hover:text-blue-300 text-sm"><a>Contact</a></li>
                    <li className="ml-6 font-thin cursor-pointer hover:text-blue-300 text-sm"><a>Zazoo</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
