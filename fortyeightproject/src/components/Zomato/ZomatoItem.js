import React from 'react'
import './ZomatoItem.css'

const ZomatoItem = (props) => {
    return (
        <div className="restaurant-card">
            <h3>Name: {props.item.restaurant.name}</h3>
            <p>Type of Food: {props.item.restaurant.cuisines}</p>
            <p>Address: {props.item.restaurant.location.address}</p>
            <img src={props.item.restaurant.featured_image} />
        </div>
    )
}

export default ZomatoItem