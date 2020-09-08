import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import flightList from '../../mapping/flightList.json';
import FlightCard from '../FlightCard/FlightCard';

const FlightsBrowse = () => {
  return (
    <View style={styles.listWrap}>
      <FlatList
        styles={{padding: 20}}
        data={flightList}
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

export default FlightsBrowse;