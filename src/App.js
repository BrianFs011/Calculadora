import React,{useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';

import NumPad from './NumPad/numPad';
import Display from './Display/display';
import styles from './Style/styles'

const initialState = {
  displayValue: '0',
  dot: 0,
  result: null,
  value: [0,0,0],
  current: 0,
}

const stateUse = {
  displayValue: '0',
  dot: 0,
  result: null,
  value: [0,0,0],
  current: 0,
}

export default function app(){

  const[displayValue, setDisplay] = useState("");
  
  useEffect(()=>{
    setDisplay()
  })

  function addDigit(n){
    setDisplay('');
    if(stateUse.result != null){
      ac();
    }

    if(n === '.'){

      if(stateUse.current == 0){
        if(stateUse.dot == 0){
          stateUse.value[0] += n
          stateUse.displayValue += n
          stateUse.dot += 1;
        }
      }
      else{
        if(stateUse.dot == 0){
          stateUse.value[2] += n
          if(stateUse.value[2] == 0 || stateUse.value[2] == undefined){
            stateUse.displayValue += '0'+n
          }
          else{
            stateUse.displayValue += n
          }
          stateUse.dot += 1;
        }
      }
    }

    else{

      if(stateUse.value[0] == '0'){
        if(n != '.'){
          stateUse.displayValue = ''
          stateUse.value[0] = ''
        }
      }
      stateUse.displayValue += n
      if(stateUse.current == 0){
        stateUse.value[0] += n
      }
      else{
        if(stateUse.value[2] == 0){
          stateUse.value[2] = ''
        }
        stateUse.value[2] += n
      }
    }
  }

  function addOperation(o){
    if(stateUse.value[1] == 0){
      if(stateUse.result != null){
        stateUse.displayValue = (eval(stateUse.displayValue))
        stateUse.result = initialState.result;
      }
      if(stateUse.value[0] != 0){
        setDisplay(o);
        stateUse.dot = 0;
        if(o == '%'){
          stateUse.displayValue += o;
          stateUse.value[0] /= 100;
          stateUse.value[1] = '*'
          stateUse.current = 2
        }
        else{
          stateUse.displayValue += o;
          stateUse.value[1] = o 
          stateUse.current = 2
        }
      }
    }  
  } 

  console.log('\n');
  console.log('display: '+ stateUse.displayValue);
  console.log('current: '+ stateUse.current);
  console.log('value[0]: '+ stateUse.value[0]);
  console.log('value[1]: '+ stateUse.value[1]);
  console.log('value[2]: '+ stateUse.value[2]);
  console.log('Result: '+ stateUse.result);
  console.log('Dot: '+ stateUse.dot);
  

  function ac(){
    setDisplay('');
    stateUse.displayValue = initialState.displayValue
    stateUse.value[0] = initialState.value[0]
    stateUse.value[1] = initialState.value[1]
    stateUse.value[2] = initialState.value[2]
    stateUse.current = initialState.current
    stateUse.result = initialState.result;
    stateUse.dot = initialState.dot;
  }

  function deletar(){
    setDisplay('');
    if(stateUse.result == null){
      stateUse.displayValue = stateUse.displayValue.slice(0, -1);
      if(stateUse.current == 2){
        stateUse.dot = initialState.dot
        if(stateUse.value[2] != 0){
          stateUse.value[2] = stateUse.value[2].slice(0, -1);
        }
        else{
          stateUse.current = initialState.current;
        }
      }
      if(stateUse.current == 0){
        stateUse.dot = initialState.dot
        if(stateUse.value[0] != 0){
          if(stateUse.value[1] != initialState.value[1]){
            stateUse.value[1] = initialState.value[1];
          }
          else{
            stateUse.value[0] = stateUse.value[0].slice(0, -1)
          }
        }
      }
    }
    else{
      ac()
    }
  }
  
  function result(){
    setDisplay('');
    let rt = eval(`${stateUse.value[0]}${stateUse.value[1]}${stateUse.value[2]}`);
    stateUse.result = rt;
    stateUse.value[0] = rt;
    stateUse.value[1] = initialState.value[1];
    stateUse.value[2] = initialState.value[2];
  }

  return(
    <View style={{flex:1, backgroundColor: '#fff'}}>
      <Display value={stateUse.displayValue} result={stateUse.result}/>
      <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
      
      <View style={styles.boxNumPad}>
        <NumPad label='AC' operation onClick={()=>{ac()}}/>
        <NumPad especial='delete'  icon operation onClick={()=>{deletar()}}/>
        <NumPad label='%' operation onClick={() => addOperation('%')}/>
        <NumPad label='/' operation onClick={() => addOperation('/')}/>
        <NumPad label='1' onClick={() => addDigit('1')}/>
        <NumPad label='2' onClick={() => addDigit('2')}/>
        <NumPad label='3' onClick={() => addDigit('3')}/>
        <NumPad label='*' operation onClick={() => addOperation('*')}/>
        <NumPad label='4' onClick={() => addDigit('4')}/>
        <NumPad label='5' onClick={() => addDigit('5')}/>
        <NumPad label='6' onClick={() => addDigit('6')}/>
        <NumPad label='-' operation onClick={() => addOperation('-')}/>
        <NumPad label='7' onClick={() => addDigit('7')}/>
        <NumPad label='8' onClick={() => addDigit('8')}/>
        <NumPad label='9' onClick={() => addDigit('9')}/>
        <NumPad label='+' operation onClick={() => addOperation('+')}/>
        <NumPad especial='maximize-2' icon operation onClick={{}}/>
        <NumPad label='0' onClick={() => addDigit('0')}/>
        <NumPad label='.' onClick={() => addDigit('.')}/>
        <NumPad label='=' especialOperation onClick={()=>{result()}}/>
      </View>
    </View>
  )
} 