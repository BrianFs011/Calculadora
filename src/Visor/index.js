import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from '../Styles/styles';

export default (props)=>{

  const stylesButton = []
  if(props.soma != null){
    stylesButton.push(Styles.textInputAfterSoma)
  }
  if(props.soma == null){
    stylesButton.push(Styles.textInput)
  }
  // console.log(stylesButton)
  return(
    <View style={Styles.boxVisor}>
      
      <View style={Styles.boxInput}>
        {
          props.input != 0
          ?
          <View>
            <Text numberOfLines={1} style={stylesButton}>{props.input}</Text>
          </View>
          :
          <View>
            <Text style={stylesButton}>0</Text>
          </View>
        }
        {
          props.soma != null ?
          <View style={Styles.boxTextResult}>
            <Text numberOfLines={1} style={Styles.textInput}>{(props.soma)}</Text>
          </View>
          :
          <View/>
        }
      </View>

    </View>
  )
}
