import * as CarsDefalult from "../dataDB.json";
import { View, Text } from "react-native";
import { useState } from "react";
import CarsCardView from "./CarsCardView";

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
type Car = {
  id: number;
  carName: string;
  typeCar: TypesCar | string;
  Driver: Driver;
};


const CarsListView = () => {
   
  return (
      <CarsCardView props={CarsDefalult[1]}/> 

  )
   
    
  
};
export default CarsCardView;
