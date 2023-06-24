import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import CarsCardView from "./CarsCardView";
import axios from "axios";

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
  typeCar?: TypesCar ;
  Driver?: Driver;
};

const CarsListView = () => {
  const customData = require("../dataDB.json") as Car[];
  const [cars, setCars] = useState<Car[]>(customData);

  //if you want get data from webstore change this url example mokapi
  const mockapiUrl = "https://6491e4a82f2c7ee6c2c91cc7.mockapi.io/cars";

  const data = async () =>
    await axios({
      url: mockapiUrl,
      responseType: "json",
      headers: {
        Accept: "application/json; odata=verbose",
      },
    })
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));

  return (
    <View>
      <SafeAreaView>
        <FlatList
        scrollEnabled={true}
          scrollIndicatorInsets={{ top: 10, bottom: 10, left: 10, right: 10 }}
          indicatorStyle="white"
          data={cars ?? customData}
          renderItem={({ item }) => <CarsCardView carItem={item} />}
          keyExtractor={(item) => `basicListEntry-${item.id}`}
        />
        <TouchableOpacity
          style={{ backgroundColor: "#39b385", borderRadius: 8, padding: 4 }}
          onPress={data}
        >
          <Text style={{ textAlign: "center", fontSize: 22, margin: 6 }}>
            {"Загрузить данные"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
export default CarsListView;
