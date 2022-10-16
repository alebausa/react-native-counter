import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const BOMScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  title: {
    padding: 50,
    fontSize: 20,
    borderWidth: 3
  }
})

