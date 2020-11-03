import React from 'react'
// import './ZomatoItem.css'

const ZomatoItem = (props) => {

    return (
        <div className="sf-card">
            <h3>Name: {props.sf.restaurants.name}</h3>
            <p>Address: {props.sf.restaurants.location.address}</p>
        </div>
    )
}

export default ZomatoItem