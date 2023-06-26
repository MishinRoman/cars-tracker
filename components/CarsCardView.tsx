import * as React from "react";
import { useState } from "react";
import { View, Text,StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import Car from '../models/Car'
import styles from "./styles/StylesComponent";

interface Props{
  carItem:Car;
  onSelectItem:Function;
 
}
const CarsCardView:React.FC<Props> = ({...props}) => {
 
 const[cardColor, setCardColr]=useState("#c994f6"); 
 
 
 const selectItem = (event:GestureResponderEvent)=>{
  setCardColr(cardColor=="#ca0000"?"#c994f6":"#ca0000");
 props.onSelectItem(props.carItem, cardColor=="#ca0000")
}

  return (
    <TouchableOpacity onLongPress={selectItem}>

    <View style={[styles.carsCard, {backgroundColor:cardColor}]} >
      <Text>{props.carItem.carName}</Text>
      <Text>{props.carItem.typeCar}</Text>
      <Text>{props.carItem.Driver?.Name}</Text>
      <Text>{props.carItem.Driver?.PhoneNumber}</Text>
    </View>
    </TouchableOpacity>
  );
};
export default CarsCardView;
