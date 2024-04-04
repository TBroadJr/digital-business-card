import React from "react"
import Info from "./Info.js"
import ContentSection from "./ContentSection.js"
import Footer from "./Footer.js"

export default function App() {
    return (
        <div className="main">
            <Info 
                img="me-outside.jpg"
                name="Tornelius Broadwater, Jr"
                position="Software Engineer"
                website="TorneliusJr.com"
            />
            <ContentSection
                title="About"
                description="I am a Software Engineer with a particular interest in making great products for others to use. I love to learn new things"
            />
            <ContentSection
                title="Interest"
                description="Spots, Fitness, Gaming"
            />
            <Footer />
        </div>
    )
}