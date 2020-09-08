import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FlightFavourites from '../FlightsFavourites/FlightFavourites';
import FlightsBrowse from '../FlightsBrowse/FlightsBrowse';
import {Container, Header, Content, Tab, Tabs} from 'native-base';


const Flights = () => {
  const [tab, setTab] = useState('browse');


  return (
    <Container>
      {/*<Header hasTabs/>*/}
      <Tabs
        initialPage={1}
        tabBarUnderlineStyle={styles.tabBarUnderline}
      >
        <Tab heading="Favourites" >
          <FlightFavourites/>
        </Tab>
        <Tab heading="Browse">
          <FlightsBrowse/>
        </Tab>
      </Tabs>
    </Container>
  );
};

let colors = [ "red", "green",  "blue", ];
// let linearGradient = new LinearGradient(90.99, '#3C4CAD' -37.36, '#00C3FF', 107.72, '#F04393', 107.73);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabBarUnderline: {
    borderRadius: 2,
    // backgroundColor: linearGradient
  }
})

export default Flights;