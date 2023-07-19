import { View, StatusBar, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import ShirtComponent from "./components/ShirtComponent";
import PantComponent from "./components/PantComponent";
import Colorcomponent from "./Colorcomponent";
import { ScrollView } from "react-native";
import { useState } from "react";

import  { useRef, useEffect } from 'react';
import { Animated } from 'react-native';



export default function App() {

  const [shirt, setshirt]=useState("#154c79");
  const [pant, setpant]=useState("lightblue");

  const[palette, setpalette]=useState(false);

  // animation functions and constants
  
  const bounceValue = useRef(new Animated.Value(0)).current;

  const startBounceAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(bounceValue, { toValue: 0, duration: 3000, useNativeDriver: true }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startBounceAnimation();
  }, []);

  return (
    <View style={{ flex: 1 ,backgroundColor:"lightgreen"}}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      
      <View style={{ flex: 1 }}>
        <Text style={styles.heading}>Dress palette</Text>
        <Animated.View style={{ transform: [{ translateY: bounceValue.interpolate({ inputRange: [0, 1], outputRange: [0, -20] }) }] }}>
            <ShirtComponent shirt={shirt} />
            <PantComponent pant={pant}/>
        </Animated.View>
        

        {/* blue background */}
        <View style={{ flex: 1,  backgroundColor: "lightblue" }}>
          {/* color palette image */}
          <TouchableOpacity onPress={() => setpalette(!palette)} style={{marginTop:70,marginLeft:300}}>
            <Image source={require("./palette.png")} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>


          {/* two color palettes */}
          {palette&& (<View style={{flex:1}}>
            <View style={[styles.c, {flexDirection:"row"}]}>
              <TouchableOpacity onPress={() => setshirt("#458757")} onLongPress={() => setshirt("#1874a5")} delayLongPress={200}>
                  <Colorcomponent color="#458757" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshirt('black')}>
                  <Colorcomponent color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshirt('blue')}>
                  <Colorcomponent color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshirt('#e8a20c')}>
                  <Colorcomponent color="#e8a20c" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setshirt('red')}>
                  <Colorcomponent color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setpant('green')}>
                  <Colorcomponent color="green" />
                </TouchableOpacity>
                
            </View>

            <View style={[styles.c2, {flexDirection:"row"}]}>
              
              <TouchableOpacity onPress={() => setpant("#FFA500")}>
                <Colorcomponent color="#FFA500" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpant('#FF00FF')}>
                <Colorcomponent color='#FF00FF' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpant('#eeeee4')}>
                <Colorcomponent color="#eeeee4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpant('#2596be')}>
                <Colorcomponent color="#2596be" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpant('#873e23')}>
                <Colorcomponent color="#873e23" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setpant('green')}>
                <Colorcomponent color="green" />
              </TouchableOpacity>
            </View>
          </View>)}
          

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Ubuntu-LightItalic',
    fontSize: 45,
    marginLeft:18
    },
  c: {
    width: 350,
    height: 80,
    backgroundColor: "violet",
    position: 'absolute',
    bottom:100
  },
  c2: {
    width: 350,
    height: 80,
    backgroundColor: "grey",
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
  },
  
})
