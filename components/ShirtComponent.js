import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import React,{useState} from "react"

export default function ShirtComponent(props) {

  
  let shirtcolor=props.shirt

  const mystyle= StyleSheet.create({
  torso: {
    backgroundColor:shirtcolor,
    //marginLeft:40, 
    //marginTop:80,
    width:90,height:100,
    shadowRadius:5, shadowColor:shirtcolor
  },
  hand1: {
    backgroundColor:"lightblue",
    width:30,height:25,
    transform: [{ rotate:'300deg'}],
    shadowRadius:5, shadowColor:shirtcolor
  },
  hand2: {
    backgroundColor:shirtcolor,
    width:30,height:25,
    transform: [{ rotate:'-300deg'}],
    shadowRadius:5, shadowColor:shirtcolor
  }
})


return (
    
    <View style={{ flexDirection: "row", marginTop:190,marginLeft:100}}>
        <Text style={[mystyle.hand1,{backgroundColor:shirtcolor}]}></Text>
        <Text style={mystyle.torso}></Text>    
        <Text style={mystyle.hand2}></Text>
    </View>

    
  );
}

