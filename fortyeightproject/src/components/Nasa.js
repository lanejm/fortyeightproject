import React, {useState, useEffect,} from 'react';
// import GoogleMap from './location/GoogleMap';
// import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import LocationResults from './LocationResults';
// import GoogleMap from './GoogleMap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'
const key = process.env.REACT_APP_KEY

const NasaImage = (props) => {
    // const [description, setDescription] = useState('')
    const [results, setResults] = useState('');
  
    const location = () => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                //console.log(position);
            },
            function(error){
                console.error(error)
            },
        )
    }
    location ();

    useEffect(
        () => {
            fetchLocalImage()
        }, [results]
    )

    const fetchLocalImage = () => {
        let url = `${baseURL}?lon=-86.148003&lat=39.791&api_key=${key}`;

        fetch (url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("Error fetching image");
            }
            return response.json();

        }) .then(response => setResults(response.response.url))
    };

    // const handleSubmit = (event) => {
    //     fetchLocalImage();
    //     //console.log(location);
    //     event.preventDefault()
    // };

    return (
        <div className="main">
          <div className="mainDiv">
            {/* <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Label htmlFor='zipcode' />
                    <Input name='zipcode' value = {description} onChange = {(e) => setDescription(e.target.value)}/>
                </FormGroup>
              {/* <Button className="submit">Submit search</Button> */}
            {/* </Form> */} 
            {fetchLocalImage}
          </div>
        </div>
      );
}



export default NasaImage;