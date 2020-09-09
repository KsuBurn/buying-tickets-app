import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FlightCard from '../FlightCard/FlightCard';

const FlightsBrowse = ({flightData, navigate, onClickFavourite}) => {
  return (
    <View style={styles.listWrap}>
      <FlatList
        styles={{padding: 20}}
        data={flightData}
        renderItem={(({item}) => (
          <View key={item.id.toString()} style={styles.flightWrap}>
            <FlightCard
              navigate={navigate}
              item={item}
              onClickFavourite={onClickFavourite}
              flightData={flightData}
            />
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