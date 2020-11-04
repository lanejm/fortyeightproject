import React from 'react'
import ZomatoItem from './ZomatoItem'

const ZomatoList = ( {items = []} ) => {
    return (
        <div>
          {items.map( (rObj,i) => <ZomatoItem item={rObj} key={i}  /> )}
        </div>
    )
};

export default ZomatoList