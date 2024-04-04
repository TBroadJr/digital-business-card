import React from "react"

export default function info({img, name, position, website}) {
    return (
        <div className="info">
            <img className="info--img" src={`../images/${img}`} alt="Personal Image outside" />
            <div className="info--details">
                <p className="info--name top-margin">{name}</p>
                <p className="info--position top-margin">{position}</p>
                <p className="info--website top-margin">{website}</p>
                <div className="info--btn-container top-margin">
                    <button className="info--btn email-btn">
                        <img className="btn-img" src="../images/Mail.png" alt="icon"/>
                        <p>Email</p>
                    </button>
                    <button className="info--btn linkedIn-btn">
                        <img className="btn-img" src="../images/Vector.png" alt="icon"/>
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </div>
    )
}