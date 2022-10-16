import React from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// These will remain the same even if you turn the phone
// const dimensions = Dimensions.get('window');
// const { width, height } = dimensions;

export const DimensionsScreen = () => {

  // With the hook, they change when the screen changes
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View>
        <View style={{ ...styles.purpleBox, width: width * 0.5, height: height * 0.5}} />
        <View style={styles.orangeBox} />
      </View>
      <View>
        <Text>W: {width} | H: {height}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#9d03fc',
  },
  orangeBox: {
    backgroundColor: '#fc7303'
  }
});
