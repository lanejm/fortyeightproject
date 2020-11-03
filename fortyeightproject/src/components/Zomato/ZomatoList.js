import React from 'react'
import ZomatoItem from './ZomatoItem'

const ZomatoList = (props) => {
    return (
        <div>
            {props.Zomato.map((sfObj, i) => <ZomatoItem sf={sfObj} key={i} />)}
        </div>
    )
}

export default ZomatoList