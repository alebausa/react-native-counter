import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TaskScreen = () => {

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]}/>
      <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: '#5856d6'
  },
  orangeBox: {
    top: 50,
    backgroundColor: '#f0a23b'
  },
  blueBox: {
    backgroundColor: '#28c4d9'
  }
});
