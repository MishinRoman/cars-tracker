import * as React from "react";
import { useState } from "react";
import { View, Text,StyleSheet, TouchableOpacity } from "react-native";

interface Props{
  carItem:Car;
}

enum TypesCar {
  "Грузовой",
  "Пассажирский",
  "Спецтранспорт",
}
type Driver = {
  Name: string;
  PhoneNumber: string;
  WhatsApp: string;
  Location: string;
};
interface Car{
  id: number;
  carName: string;
  typeCar?: TypesCar;
  Driver?: Driver;
};

const styles = StyleSheet.create({
  carsCard:{
    margin:9,
    padding:15,
    width:300,
    borderRadius:12
  },
  
}
)


const CarsCardView:React.FC<Props> = ({carItem}) => {
 const[cardColor, setCardColr]=useState("#c994f6") 
  return (
    <TouchableOpacity onLongPress={()=>{setCardColr(cardColor=="#ca0000"?"#c994f6":"#ca0000")}}>

    <View style={[styles.carsCard, {backgroundColor:cardColor}]} >
      <Text>{carItem.carName}</Text>
      <Text>{carItem.typeCar}</Text>
      <Text>{carItem.Driver?.Name}</Text>
      <Text>{carItem.Driver?.PhoneNumber}</Text>
    </View>
    </TouchableOpacity>
  );
};
export default CarsCardView;
