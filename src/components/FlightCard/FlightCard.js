import React, {useState} from 'react';
import {Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

const FlightCard = ({item}) => {
  return (
    // <Container>
      <Card style={{ marginBottom: 20}}>
        <CardItem>
          <TouchableOpacity style={styles.wrap}>
            <View style={styles.infoWrap}>
              <View style={styles.planeWrap}>
                <Image
                  source={require('../../../assets/img/plane.png')}
                />
              </View>
              <View style={styles.info}>
                <View style={styles.cities}>
                  <Text style={styles.city}>{item.departureCity}</Text>
                  <Image
                    source={require('../../../assets/img/arrow.png')}
                  />
                  <Text style={styles.city}>
                    {item.arrivalCity}
                  </Text>
                </View>
                <Text style={styles.additionalInfo}>
                  {item.departureAirport} - {item.date.departureDate} - {item.date.departureTime}
                </Text>
                <Text style={styles.additionalInfo}>
                  {item.airlines}
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/img/like.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.priceWrap}>
              <Text style={styles.priceTitle}>
                Price:
              </Text>
              <Text style={styles.priceNumber}>
                {item.price} ₽
              </Text>
            </View>

          </TouchableOpacity>

        </CardItem>
      </Card>
    // </Container>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%'
  },
  planeWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#f2f8ff',
    width: 60,
    height: 60,
  },
  cities: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  city: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
  },
  additionalInfo: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 22,
    fontFamily: 'SF_Pro_Text',
    letterSpacing: -0.408,
    color: '#878787'
  },
  infoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    marginBottom: 7.5,
    paddingBottom: 15,
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  priceTitle: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 20,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
    color: '#878787',
    marginRight: 8,
  },
  priceNumber: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    fontFamily: 'SF_Pro_Text',
  }
})

export default FlightCard;