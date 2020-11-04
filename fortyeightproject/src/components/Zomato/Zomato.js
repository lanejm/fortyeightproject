import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ZomatoList from './ZomatoList';
import './Zomato.css';

const Zomato = (props) =>{

var [lon, setLon] = useState('')
var [lat, setLat] = useState('')
const [items, setItems] = useState([])
const key = 'f198de8478f86394e43b4f1f464b5a0b'

// lat = '41.881832'
// lon = '-87.623177'

useEffect(() => {
  const fetchItems = async () => {
    const result = await axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`, {
      headers: {
        'user-key': key
      }
    })

    console.log(result.data)
    setItems(result.data.nearby_restaurants)
    console.log(items)
  }
  fetchItems()
}, [lon, lat]);

return (
    <div className='container'>
        <section>
          <form>
            <input type='text' placeholder='Latitude' onChange={e => setLat(e.target.value)}></input>
            <input type='text' placeholder='Longitude' onChange={e => setLon(e.target.value)}></input>
          </form>
        </section>
        <ZomatoList />
    </div>
  )
}


export default Zomato