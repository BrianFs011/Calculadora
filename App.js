import React from 'react';
import { View, Text } from 'react-native';

import Styles from './src/Styles/styles';
import NumPad from './src/NumPad/index';
import Visor from './src/Visor/index'

export default ()=>{
  return(
    <View style={Styles.boxCalculadora}>

      <Visor/>
      <NumPad/>
      
    </View>
  )
}
