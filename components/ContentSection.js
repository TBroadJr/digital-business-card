import React from "react"

export default function ContentSection({title, description}) {
    return (
        <div className="content-section">
            <p className="section--title">{title}</p>
            <p className="section--description top-margin">{description}</p>
        </div>
    )
}