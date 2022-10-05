import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
  title: string,
  position?: 'br' | 'bl' // Optional parameter with only two options
  onPress: () => void, // Function that doesn't return anything
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

  const ios = () => {
    return (
       <View
        style={[
            styles.fabLocation,
            (position === 'br' ? styles.fabLocationBR : styles.fabLocationBL)
          ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onPress()}
          >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
    </View>
    )
  }

  const android = () => {
    return (
       <View
        style={[
            styles.fabLocation,
            (position === 'br' ? styles.fabLocationBR : styles.fabLocationBL)
          ]}>
          <TouchableNativeFeedback
            onPress={() => onPress()}
            background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 30,
  },
  fabLocationBR: {
    right: 30
  },
  fabLocationBL: {
    left: 30
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center'
  }
})
