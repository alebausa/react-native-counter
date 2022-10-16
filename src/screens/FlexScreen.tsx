import React from 'react'
import { View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
      <Text style={styles.box3}>Box 4</Text>
      <Text style={styles.box3}>Box 5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 300,
    flexDirection: 'column', // default
    //justifyContent: 'center', // center of parent, not window
    backgroundColor: '#28C4d9',
    alignItems: 'flex-start',
    //flexWrap: 'wrap'

  },
  box1: {
    //flex: 1, // Makes fractions and takes some of them (in this case, 1/3)
    width: 300,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center' //Overwrites default behaviour (stretch)
  },
  box2: {
    //flex: 1,
        width: 300,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-start'
  },
  box3: {
    //flex: 1,
        width: 300,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-end'
  },
});
