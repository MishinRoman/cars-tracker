
import * as React from "react";
import { View, Text } from "react-native";

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
  typeCar?: TypesCar|string;
  Driver?: Driver;
};

const CarsCardView:React.FC<Props> = ({carItem}) => {
  return (
    <View>
      <Text>{carItem.carName}</Text>
      <Text>{carItem.typeCar}</Text>
      <Text>{carItem.Driver?.Name}</Text>
      <Text>{carItem.Driver?.PhoneNumber}</Text>
    </View>
  );
};
export default CarsCardView;
