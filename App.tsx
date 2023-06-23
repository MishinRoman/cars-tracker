import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CarsListView  from './components/CarsListView';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsListView/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   //flexWrap:"wrap",
   backgroundColor: '#0000',
   alignItems: 'center',
   justifyContent:"center"
  },
});
