import React from 'react'

function Card({ children }) {
    return (
        <div className="flex items-center justify-center border border-red-300 m-3 p-2 bg-green-200">
            {children}
        </div>
    )
}

export default Card
