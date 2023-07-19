import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Colorcomponent(props) {
    const styles=StyleSheet.create({
        container:{
              width:80,
              height:80,
              backgroundColor:props.color,
        }
      })
  return (
    <View style={styles.container}>
    </View>
  )
}
