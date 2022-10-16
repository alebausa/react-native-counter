import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BOMScreen } from './src/screens/BOMScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PositionScreen/>
    </SafeAreaView>
  ) 
}
