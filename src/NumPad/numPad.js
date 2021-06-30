import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import  Icon  from 'react-native-vector-icons/Feather';

import styles from '../Style/styles'

export default (props)=>{
  const stylesButton = [styles.button];
  const stylesFontButton = [styles.fontButton];
  if(props.operation) {
    stylesFontButton.push(styles.operationButton)
  }
  if(props.especialOperation){
    stylesFontButton.push(styles.especialOperation)
    stylesButton.push(styles.especialButton)
  }  
 
  let nameIcon = props.especial
  
  
  return(
    <TouchableOpacity style={stylesButton} onPress={props.onClick}>
      {
        props.icon == true
        ?
        <Icon style={stylesFontButton} name={nameIcon}/>
        :
        <Text style={stylesFontButton}>{props.label}</Text>
      }
    </TouchableOpacity>
  )
}