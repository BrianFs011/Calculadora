import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import Styles from './src/Styles/styles';
import NumPad from './src/NumPad/index';
import Visor from './src/Visor/index';

export default ()=>{
  return(
    <View style={Styles.boxCalculadora}>
      
      <StatusBar backgroundColor='#ddd'barStyle='dark-content'/>
   
      <NumPad/>
      
    </View>
  )
}
