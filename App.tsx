import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  CarsListView  from './components/CarsListView';
import { Stack, useRouter } from 'expo-router';
import { ButtomMenu } from './components/ButtomMenu';
import { Navigator } from 'expo-router';




export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <CarsListView/>
      <ButtomMenu/>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 2,   
   backgroundColor: '#1e201e',
   alignItems: 'center',
   justifyContent:"center",
   paddingVertical:50,
   margin:0,
    
   
  },
  

});
