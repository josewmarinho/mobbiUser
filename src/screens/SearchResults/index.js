import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

import { useRoute } from '@react-navigation/native';

const SearchResults = (props) => {
  const typeState = useState(null);


  const route = useRoute();

  console.log(route.params);
  const {originPlace, destinationPlace} = route.params


  const onSubmit = async () => {
    const[type] = typeState[type];
    if(!type) {
      return
    }
  }

  //submit to backend
  try {
    //const userInfo = await Auth.

    //const data = new Date();

    /* const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lgn,

        detLatitude: destinationPlace.details.geometry.location.lat,
        desLongitude: destinationPlace.details.geometry.location.lng,

        userId: UserInfo.attributes.sub,
        carId: "1",
        status: "NEW",


        const response = await API.post()


    } */

  }catch(e) {

  }

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes typeState={typeState}/>
      </View>
    </View>
  );
};

export default SearchResults;