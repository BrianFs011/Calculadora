import React from 'react';
import {View, Text} from 'react-native';

import styles from '../Style/styles'

export default (props)=>{
  return(
    <View style={styles.display}>

      {
      props.result == null
      ?
        <View >
          <Text  style={styles.displayValue}>{props.value}</Text>
        </View>
      :
        <View style={styles.displayResult}>
          <Text  style={styles.displayValueResult}>{props.value}</Text>

          <Text numberOfLines={1} style={styles.displayValue}>{props.result}</Text>
        </View>
      }
    
    </View>
  )
}