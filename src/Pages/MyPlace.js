import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../UI/Header';
import SelectedPlace from '../UI/SelectedPlace';
import './MyPlace.css';

const MyPlace = props => {
  const url = new URL(window.location.href);
  const queryParams = url.searchParams;
  let coords;
  let address;
  // const coords = {
  //   lat: parseFloat(queryParams.get('lat')),
  //   lng: +queryParams.get('lng')
  // };
  // const address = queryParams.get('address');
  const locationId = queryParams.get('location');
  fetch('http://localhost:3001/location/'+ locationId)
  .then(response =>{
    if(response.status === 404){
      throw new Error('Could not find location on database');
    }
    return response.json();
  }).then(data=>{
    console.log(data);
     coords = data.coordinates;
     address = data.address;
     console.log(coords);
     console.log(address);
     console.log(props);
  }).catch(err =>{
    alert(err.message);
  })

  return (
    <React.Fragment>
      <Header title={address} />

      <SelectedPlace
        fallbackText="Could not find place."
        centerCoords={coords}
      />

      <section id="share-controls">
        <Link to="/">Share a New Place!</Link>
      </section>
    </React.Fragment>
  );
};

export default MyPlace;
