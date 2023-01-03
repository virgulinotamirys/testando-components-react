import React from "react"

import './style.css'

const Card: React.FunctionComponent = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card