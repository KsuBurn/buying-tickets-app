import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FlightCard from '../FlightCard/FlightCard';
import {connect} from 'react-redux';
import {flightListAction} from '../../actions';

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

const mapStateToProps = state => {
  return state.flightsData;
};

export default connect(mapStateToProps,{flightListAction})(FlightsBrowse);