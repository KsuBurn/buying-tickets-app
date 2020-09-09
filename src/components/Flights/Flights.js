import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FlightFavourites from '../FlightsFavourites/FlightFavourites';
import FlightsBrowse from '../FlightsBrowse/FlightsBrowse';
import {Container, Header, Content, Tab, Tabs, Segment, Button} from 'native-base';
import {store} from '../../../App';
import {flightListAction} from '../../actions';
import flightList from '../../mapping/flightList.json';
import {addToFavourites} from '../../utils/addToFavourites';
import {connect} from 'react-redux';

const Flights = (props) => {
  const {navigate} = props.navigation;

  useEffect(() => {
    store.dispatch(flightListAction(flightList));
  },[]);

  const onClickFavourite = (flightList, flightItemId) => {
    const newFlightList = addToFavourites(flightList, flightItemId);
    store.dispatch(flightListAction(newFlightList));
  };


  console.log('props.flightList',props.flightList)
  return (
    <Container>
      <Header transparent={true}/>
      {/*<Segment style={{backgroundColor: '#fff', justifyContent: 'space-around'}}>*/}
      {/*  <Button onPress={() => console.log('click')}>*/}
      {/*    <Text>Favourites</Text>*/}
      {/*  </Button>*/}
      {/*  <Button>*/}
      {/*    <Text>Browse</Text>*/}
      {/*  </Button>*/}
      {/*</Segment>*/}
      {/*<View>*/}

      {/*</View>*/}
      <Tabs
        initialPage={1}
        tabBarUnderlineStyle={styles.tabBarUnderline}
      >
        <Tab
          heading="Favourites"
          // tabStyle={{backgroundColor: '#fff'}}
          // activeTabStyle={{backgroundColor: '#fff'}}
          // textStyle={{color: '#000'}}
          // activeTextStyle={{color: '#000'}}
        >
          <FlightFavourites
            flightData={props.flightList}
            navigate={navigate}
            onClickFavourite={onClickFavourite}
          />
        </Tab>
        <Tab
          heading="Browse"
          // tabStyle={{backgroundColor: '#fff'}}
          // activeTabStyle={{backgroundColor: '#fff'}}
          // textStyle={{color: '#000'}}
          // activeTextStyle={{color: '#000'}}
          >
          <FlightsBrowse
            flightData={props.flightList}
            navigate={navigate}
            onClickFavourite={onClickFavourite}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabBarUnderline: {
    borderRadius: 2,
    backgroundColor: 'blue'
  }
});

const mapStateToProps = state => {
  return state.flightsData;
};

export default connect(mapStateToProps)(Flights);