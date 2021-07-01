import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from '../Style/styles'

export default (props)=>{
  return(
    <View style={styles.display}>

      {
      props.result == null
      ?
        <ScrollView ref={ref => {this.scrollView = ref}} onContentSizeChange={()=>{this.scrollView.scrollToEnd({animated: true})}} horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', alignItems:"flex-end"}} showsHorizontalScrollIndicator={false}>
          <Text numberOfLines={1} style={styles.displayValue}>{props.value}</Text>
        </ScrollView>
      :
      <>
        <View style={{flex:1}}>
          <ScrollView ref={ref => {this.scrollView = ref}} onContentSizeChange={()=>{this.scrollView.scrollToEnd({animated: true})}} horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end', alignItems:"flex-end"}} showsHorizontalScrollIndicator={false}>
            <Text  numberOfLines={1} style={styles.displayValueResult}>{props.value}</Text>
          </ScrollView>
        </View>

        <View >
          <ScrollView  horizontal={true} contentContainerStyle={{flexGrow: 1,justifyContent: 'flex-end', paddingTop: 20, alignItems:"flex-end"}} showsHorizontalScrollIndicator={false}>
            <Text style={styles.displayValue}>{props.result}</Text>
          </ScrollView>
        </View>
      </>
      }
    
    </View>
  )
}