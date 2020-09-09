import React, {useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import * as GestureHandler from 'react-native-gesture-handler';

import SwipeUpDown from 'react-native-swipe-up-down';

const {Swipeable} = GestureHandler;

const FightScreen = (props) => {
  const [swipeUp, setSwipeUp] = useState(42)
  const {item} = props.route.params;

  const config = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 5
  };

  return (
       <View>
         <Image
           style={styles.image}
           source={require('../../../assets/img/flight_background.png')}
         />
         <GestureRecognizer
           config={config}
           onSwipeUp={() => setSwipeUp(120)}
           onSwipeDown={() => setSwipeUp(42)}
         >
         <View style={[styles.infoWrap, {bottom: swipeUp}]}>
           <TouchableOpacity
             style={styles.like}
             onPress={() => console.log('like')}
           >
             <Image
               source={item.isFavourite ? require('../../../assets/img/like_active.png') : require('../../../assets/img/like.png')}
             />
           </TouchableOpacity>
           <View style={styles.flightInfo}>
             <View>
               <Text style={styles.flightData}>{item.date.departureDate}</Text>
               <Text style={styles.airport}>{item.departureAirport}</Text>
               <Text style={styles.flightData}>{item.departureCity}</Text>
             </View>
             <Image
               source={require('../../../assets/img/arrow2.png')}
             />
             <View>
               <Text style={styles.flightData}>{item.date.arrivalTime}</Text>
               <Text style={styles.airport}>{item.arrivalAirport}</Text>
               <Text style={styles.flightData}>{item.arrivalCity}</Text>
             </View>
           </View>

           <LinearGradient
             colors={['#3C4CAD', '#00C3FF']}
             start={[-0.1534, 1.4595]}
             end={[1.2, -1.7]}
             style={styles.flightAdditionalInfo}
           >
             <View style={styles.addInfo}>
               <Text style={styles.addInfo_title}>Price</Text>
               <Text style={styles.addInfo_value}>{item.price} ₽</Text>
             </View>
             <Image
               source={require('../../../assets/img/line.png')}
             />
             <View style={styles.addInfo}>
               <Text style={styles.addInfo_title}>Boarding</Text>
               <Text style={styles.addInfo_value}>{item.date.arrivalTime}</Text>
             </View>
           </LinearGradient>
           <View>
             <ScrollView horizontal>
               <Image
                 source={require('../../../assets/img/NY1.png')}
               />
               <Image
                 source={require('../../../assets/img/NY2.png')}
               />
               <Image
                 source={require('../../../assets/img/NY1.png')}
               />
             </ScrollView>
           </View>

         </View>
         </GestureRecognizer>
       </View>


  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 385
  },
  infoWrap: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '100%',
    position: 'relative',
    // bottom: 42,
    height: 500,
    padding: 30
  },
  flightInfo: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 17,
    paddingHorizontal: 10
  },
  like: {
    position: 'absolute',
    top: '6%',
    left: '105%',
    width: 20,
    height: 17
  },
  airport: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 36,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
  },
  flightData: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
    color: '#878787',
  },
  flightAdditionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 23,
  },
  addInfo: {
    alignItems: 'center',
    flex: 1
  },
  addInfo_title: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
    color: '#fff',
    marginBottom: 3
  },
  addInfo_value: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
    color: '#fff',
  }
});

export default FightScreen;