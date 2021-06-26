import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from '../Styles/styles';

export default ()=>{
  return(
    <View style={Styles.boxVisor}>
      
      <View style={Styles.boxInput}>
        <Text style={Styles.textInput}>0</Text>
      </View>

    </View>
  )
}
