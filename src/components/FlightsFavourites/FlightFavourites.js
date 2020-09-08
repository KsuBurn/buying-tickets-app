import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import FlightCard from '../FlightCard/FlightCard';

const FlightFavourites = ({flightData}) => {
  return (
    <View style={styles.listWrap}>
      <FlatList
        styles={{padding: 20}}
        data={flightData.filter(item => item.isFavourite)}
        renderItem={(({item}) => (
          <View key={item.id.toString()} style={styles.flightWrap}>
            <FlightCard item={item}/>
          </View>
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrap: {
    paddingTop: 20,
  },
  flightWrap: {
    paddingHorizontal: 20,
  }
});

export default FlightFavourites;