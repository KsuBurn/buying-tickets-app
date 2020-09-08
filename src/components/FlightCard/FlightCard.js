import React, {useState} from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import {Image, StyleSheet, View} from 'react-native';
import TouchableOpacity from 'react-native-web/dist/exports/TouchableOpacity';

const FlightCard = ({item}) => {
  return (
    <Container>
      <Card>
        <CardItem>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.planeWrap}>
              <Image
                source={require('../../../assets/img/plane.png')}
              />
            </View>
            <View>
              <View style={styles.info}>
                <View style={styles.cities}>
                  <Text>{item.departureCity}</Text>
                  <Image
                    source={require('../../../assets/img/arrow.png')}
                  />
                  <Text>{item.arrivalCity}</Text>
                </View>
                <Text>{item.departureAirport} - {item.date.departureDate} - {item.date.departureTime}</Text>
                <Text>{item.airlines}</Text>
              </View>
              <View style={styles.priceWrap}>
                <Text>Price: </Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>

        </CardItem>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  planeWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#f2f8ff',
    width: 60,
    height: 60
  },
  cities: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9'
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})

export default FlightCard;