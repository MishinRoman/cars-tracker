import {View, Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import Car from '../models/Car'
import styles from './styles/StylesComponent';
type Props = {
  selectedItems:Car[];
  deleteSelectedCar:VoidFunction;

};
export function SelectedActions(props: Props) {
  return (
   <View>
    {props.selectedItems.length>0
       ?(
            <View style={styles.selectedActions}>
                <Text style={styles.textSelectedCount}>{"Выибрано: "+props.selectedItems.length}</Text>
                <TouchableOpacity
                style={styles.deleteBtn}
                onPress={props.deleteSelectedCar}
                >
                <Text style={styles.buttonText}>{"Удалить"}</Text>
                </TouchableOpacity>

            </View>
       )
       :''

    }

   </View>
  );
};