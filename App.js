import React from "react"
import About from "./Components/About"
import Info from "./Components/Info"
import Interests from "./Components/Interests"

export default function App() {
    return (
        <div className="container">
        <div className = "infoHolder"></div>
            <About />
            <Interests />
            <Info />
        </div>
    )
}