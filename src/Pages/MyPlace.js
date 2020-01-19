import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../UI/Header';
import SelectedPlace from '../UI/SelectedPlace';
import './MyPlace.css';
import { updateCoordAddress, isAddressFetched } from '../actions/locationController';

const MyPlace = props => {
  const url = new URL(window.location.href);
  const queryParams = url.searchParams;
  // let coords= props.coords;
  // let address = props.address;
  console.log(props);
  // const coords = {
  //   lat: parseFloat(queryParams.get('lat')),
  //   lng: +queryParams.get('lng')
  // };
  // const address = queryParams.get('address');

  //let's check if the location has been fetched already
  if(!props.addressLoaded){
    const locationId = queryParams.get('location');
  fetch('http://localhost:3001/location/'+ locationId)
  .then(response =>{
    if(response.status === 404){
      throw new Error('Could not find location on database');
    }
    return response.json();
  }).then(data=>{
    console.log(data);
    //  coords = data.coordinates;
    //  address = data.address;
     props.dispatch(updateCoordAddress(data.address, data.coordinates));
     props.dispatch(isAddressFetched());
    //  console.log(coords);
    //  console.log(address);
      console.log(props);
  }).catch(err =>{
    alert(err.message);
  })
  }

  

  return (
    <React.Fragment>
      <Header title={props.address} />

      <SelectedPlace
        fallbackText="Could not find place."
        centerCoords={props.coords}
      />

      <section id="share-controls">
        <Link to="/">Share a New Place!</Link>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps= (state)=>{
  const locationDetails = state.locationDetails;
  return {
      address: locationDetails.address,
      coords: locationDetails.coords,
      addressLoaded: locationDetails.isAddressFetched
      
  }
}

export default connect(mapStateToProps)(MyPlace);


//export default MyPlace;
