import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    carsCard:{
      margin:9,
      padding:15,
      width:340,
      borderRadius:12
    },
    button:{        
        backgroundColor: "#39b385",
        borderRadius: 8,
        padding: 4 
    },
    buttonText:{
        textAlign: "center",
        fontSize: 22,
        margin: 4,
         color:"#181818" 
    },
    selectedActions:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
        
    },
    deleteBtn:{        
        backgroundColor: "#b10000",
        borderRadius: 8,     
        padding:4
       
    },
    textSelectedCount:{
        fontSize:22,
        textAlign:"center",
        color:"#ffffff"


    },
    MenuBtn:{
       backgroundColor:"#0a84d6",
       padding:4,
      
       
    }

    
  });
  export default styles;