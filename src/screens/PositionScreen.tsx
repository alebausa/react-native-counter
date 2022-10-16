import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeBox} />
      <View style={styles.purpleBox}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4d9',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    // By default, items are always position relative to the natural position according to the parent
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    // You can do this = position absolute, everything 0, and no width/height, and it stretches to the whole parent
    //...StyleSheet.absoluteFillObject
  }
});
