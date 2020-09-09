import {AsyncStorage} from 'react-native';

export const sendToStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('sendToStorage error', error)
  }
};