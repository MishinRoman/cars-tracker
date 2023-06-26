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
import Car from "../models/Car";
import { SelectedActions } from "./SelectedActions";
import styles from "./styles/StylesComponent";



const CarsListView:React.FC = () => {
  const customData = require("../dataDB.json") as Car[];
  const [cars, setCars] = useState<Car[]>();

  //if you want get data from webstore change this url example mokapi
  const mockapiUrl = "https://6491e4a82f2c7ee6c2c91cc7.mockapi.io/cars";

  const data = async ()  =>
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


      const [selectedItems, setSelectedItems]=useState<Car[]>([]);

      const addSelectedItems = (selectedItem:Car, selected:boolean)=>{
        if(selectedItems.length>0&&selectedItems.some(i=>i.id===selectedItem.id)){
          const deleted = selectedItems.filter(i=>i.id!=selectedItem.id)
          setSelectedItems(deleted)
        }
        else{
          setSelectedItems([...selectedItems,selectedItem])
        }
      }
      const onDelete =()=>{
        //setCars()
      }

  return (
    <View>
      <SafeAreaView>
        <SelectedActions selectedItems={selectedItems} />
        <FlatList
        scrollEnabled={true}
          scrollIndicatorInsets={{ top: 10, bottom: 10, left: 10, right: 10 }}
          indicatorStyle="white"
          data={cars ?? customData}
          renderItem={({ item }) => <CarsCardView onSelectItem={addSelectedItems}  carItem={item} />}
          keyExtractor={(item) => `basicListEntry-${item.id}`}
          onScrollEndDrag={data}
          onScrollBeginDrag={data}
         
        />
      </SafeAreaView>

      {/* <TouchableOpacity
          style={styles.button}
          onPress={data}
        >
          <Text style={styles.buttonText}>
            {"Загрузить данные"}
          </Text>
        </TouchableOpacity> */}
    </View>
  );
};
export default CarsListView;
