import React,{useState} from 'react';
import { View , StyleSheet} from 'react-native';

const PantComponent = (props) => {

  let pantcolor=props.pant

  const styles =StyleSheet.create({
    main:{
        flexDirection:"row",
        marginLeft:130,
        marginBottom:4
    },
    leg1:{
        backgroundColor:pantcolor,
        width:45,height:70,
        transform: [{ rotate:'5deg'}],
    },
    leg2:{
        backgroundColor:pantcolor,
        width:45,height:70,
        transform: [{ rotate:'-5deg'}],
    }
}) 

  return (
    <View style={styles.main}>
    <View style={styles.leg1} />
    <View style={styles.leg2} />
    </View>
  );
};

export default PantComponent;


