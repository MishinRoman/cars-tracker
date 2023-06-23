// @flow
import * as React from "react";
import { View, Text } from "react-native";

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
interface Props{
  id: number;
  carName: string;
  typeCar: TypesCar | any;
  Driver: Driver| any;
};

const CarsCardView = (props:Props) => {
  return (
    <View>
      <Text>{props.id}</Text>
    </View>
  );
};
export default CarsCardView;
