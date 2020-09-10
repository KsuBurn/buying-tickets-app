import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import FlightFavourites from '../FlightsFavourites/FlightFavourites';
import FlightsBrowse from '../FlightsBrowse/FlightsBrowse';
import {Container, Header, Tab, Tabs, Spinner} from 'native-base';
import {store} from '../../../App';
import {flightListAction} from '../../actions';
import flightList from '../../mapping/flightList.json';
import {addToFavourites} from '../../utils/addToFavourites';
import {connect} from 'react-redux';
import {sendToStorage} from '../../utils/sendToStorage';
import {getOfStorage} from '../../utils/getOfStorage';

const Flights = (props) => {
  const [flightData, setFlightData] = useState();

  const {navigate} = props.navigation;

  const getData = async () => {
    const data = await getOfStorage('flightList');

    if (data) {
      setFlightData(JSON.parse(data));
    } else {
      store.dispatch(flightListAction(flightList));
      sendToStorage('flightList', props.flightList);
      setFlightData(props.flightList);
    }
  };

  useEffect( () => {
    store.dispatch(flightListAction(flightList));
    getData();
  }, [props.flightList]);

  const onClickFavourite = (flightList, flightItemId) => {
    const newFlightList = addToFavourites(flightList, flightItemId);
    store.dispatch(flightListAction(newFlightList));
    sendToStorage('flightList', newFlightList);
    setFlightData(newFlightList);
  };

  return (
    <>
    {flightData ? (
        <Container>
          <Header
            hasTabs={true}
            androidStatusBarColor='#000'
            style={{backgroundColor: '#fcfcfc', shadowColor: '#fff'}}
          >
            <Text style={styles.header}>
              Flights
            </Text>
          </Header>
          <Tabs
            initialPage={1}
            tabBarUnderlineStyle={styles.tabBarUnderline}
            tabContainerStyle={{shadowRadius: 0}}
          >
            <Tab
              heading="Favourites"
              tabStyle={{backgroundColor: '#fcfcfc', width: 147}}
              activeTabStyle={{backgroundColor: '#fcfcfc'}}
              textStyle={{color: '#000'}}
              activeTextStyle={{color: '#000'}}
            >
              <FlightFavourites
                flightData={flightData}
                navigate={navigate}
                onClickFavourite={onClickFavourite}
              />
            </Tab>
            <Tab
              heading="Browse"
              tabStyle={{backgroundColor: '#fcfcfc', shadowColor: 'red'}}
              activeTabStyle={{backgroundColor: '#fcfcfc', shadowColor: 'red', noShadow: 1}}
              textStyle={{color: '#000'}}
              activeTextStyle={{color: '#000'}}
            >
              <FlightsBrowse
                flightData={flightData}
                navigate={navigate}
                onClickFavourite={onClickFavourite}
              />
            </Tab>
          </Tabs>
        </Container>
      ) : (
        <Spinner color='blue' />
      )}
      </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabBarUnderline: {
    borderRadius: 2,
    backgroundColor: '#1b8edb',
    paddingHorizontal: 50,
  }
});

const mapStateToProps = state => {
  return state.flightsData;
};

export default connect(mapStateToProps)(Flights);