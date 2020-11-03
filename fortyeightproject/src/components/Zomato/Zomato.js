import React, { useState, useEffect } from 'react';

import ZomatoList from './ZomatoList';

const Zomato = (props) => {

  const [city, setCity] = useState('') 
  const [Zomato, setZomato] = useState([])

  useEffect(
    () => {
      fetchZomato()
    }, []
  )

  const fetchZomato = () => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&start=1&count=10`, {
      method: 'GET'
    }).then(r => r.json())
      .then(rArr => setZomato(rArr))
  }

  return (
    <div>
        <label for="city">City:</label>
        <input onChange={event => setCity(event.target.value)} />
        <ZomatoList Zomato={Zomato} />
    </div>
  )
}

export default Zomato;