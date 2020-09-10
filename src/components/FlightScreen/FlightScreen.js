import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {flightListAction} from '../../actions';
import {store} from '../../../App';
import {addToFavourites} from '../../utils/addToFavourites';
import {sendToStorage} from '../../utils/sendToStorage';
import {getDate} from '../../utils/getDate';
import {getTime} from '../../utils/getTime';

const FlightScreen = (props) => {
  const [isFavourite, setIsFavourite] = useState();
  const [percent, setPercent] = useState(0.23);
  const height = Dimensions.get('window').height;

  const {item, flightData} = props.route.params;

  useEffect(() => {
    setIsFavourite(item.isFavourite);
  }, []);

  const onClickFavourite = (flightList, flightItemId) => {
    setIsFavourite(!isFavourite);
    const newFlightList = addToFavourites(flightList, flightItemId);
    store.dispatch(flightListAction(newFlightList));
    sendToStorage('flightList', newFlightList);
  };

  return (
    <View style={styles.wrap}>
      <View style={{position: 'relative', height: height * percent}}>
        <Image
          style={styles.image}
          source={require('../../../assets/img/flight_background.png')}
        />
      </View>
      <View
        style={styles.infoWrap}
        onLayout={(event) => setPercent((1 - (event.nativeEvent.layout.height/ height)))}
      >
        <TouchableOpacity
          style={styles.like}
          onPress={() => onClickFavourite(flightData, item.id)}
        >
          <Image
            source={isFavourite ? require('../../../assets/img/like_active.png') : require('../../../assets/img/like.png')}
          />
        </TouchableOpacity>
        <View style={styles.flightInfo}>
          <View>
            <Text style={styles.flightData}>{getDate(item.date.departureDate)}</Text>
            <Text style={styles.airport}>{item.departureAirport}</Text>
            <Text style={styles.flightData}>{item.departureCity}</Text>
          </View>
          <Image
            source={require('../../../assets/img/arrow2.png')}
          />
          <View>
            <Text style={styles.flightData}>{getTime(item.date.departureDate)}</Text>
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
            <Text style={styles.addInfo_value}>{getTime(item.date.arrivalDate - 1800000)}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 385,
  },
  infoWrap: {
    backgroundColor: '#fff',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    width: '100%',
    position: 'relative',
    padding: 30,
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
  },
});

export default FlightScreen;