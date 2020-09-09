import { AsyncStorage } from 'react-native'

export const getOfStorage =  async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('getOfStorage error', error)
  }
};