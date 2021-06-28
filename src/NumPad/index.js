import React,{useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';

import Styles from '../Styles/styles';
import Visor from '../Visor/index';

// let armazenar1 = null;
// let armazenar2 = '';
const armazenar = [0,0];
let arm = '';
let i = 0;
let print = '';
let sinal = '';
let res = null;
let ponto = 0;

let cal = 'asdiud';
cal.slice(0, -2)
console.log(cal)

export default ()=>{
  
  const [deleta, setDeleta] = useState('');
  const[buttonInput, setButtonInput] = useState(null);
  const[total, setTotal] = useState(null);
  
  const[operacao, setOperacao] = useState('');
  const[valores, setValores] = useState(0);
  
  useEffect(()=>{
    setOperacao('')
    setValores()
    setButtonInput()
    setDeleta()
  }),
  function teste(){
  }
  
  function valorOperacao(props){
    if(res != null){
      print = armazenar[0]
    }
    if(props == '%'){
      setOperacao(props)
      print += props;
      let pc = armazenar[0] 
      armazenar[0] = pc / 100
      print = pc / 100
      
    }
    else{

      
      if(armazenar[0] != 0){
        setOperacao(props)
        sinal = props;
        i = 1;
        arm = '';
        print += props;
        setTotal(null)
      }
      else{
        if(props == '-'){
          setOperacao(props)
          sinal = props;
          print += '-'
          arm += '-' 
          armazenar[i] = arm
        }
      }
      
    }
  }
  
  function valorNumber(props){
    setValores(props)
    
    if(props == '.'){
      if(ponto != 0){
        armazenar[0] = '.'
        ponto == 1;
      }
    }

    //if(armazenar[0] != props){
      arm += props;
      print += props; 
      armazenar[i] = arm
    //}

  }
  
  function reiniciar(props){
    setButtonInput(props);
    armazenar[0] = 0;
    armazenar[1] = 0;
    arm = '';
    i = 0;
    print = props;  
    setTotal(null);
  }

  function result(){
    if(armazenar[0] != '-'){
      if(sinal == '%'){
        res = eval(`${armazenar[0]}${'/'}${'*'}${armazenar[1]}`);
      }
      else{
        res = eval(`${armazenar[0]}${sinal}${armazenar[1]}`);
      }
    } 
    
    setTotal(res)
    armazenar[0] = res
    armazenar[1] = 0
    // if(armazenar[1] != 0 ){
    //   }

  }

  function deletar(){
    setDeleta('')
    // let asd = props
    if(total == null){

      if(armazenar[0] == 0){
        armazenar[0] = 0;
      }
      
      if(armazenar[0] != 0){
        
        if(i == 0){

          armazenar[0] = armazenar[0].slice(0, -1)
          arm = arm.slice(0, -1)
          print = print.slice(0, -1)
          
        }
        else{
          if(armazenar[1] != 0){

            armazenar[1] = armazenar[1].slice(0, -1)
            arm = arm.slice(0, -1)
            print = print.slice(0, -1)
            
            if(armazenar[1] == 0){
              armazenar[1]= 0;
            }
            //   if(operacao){
            //     setOperacao('')
            //     i = 0;
            //   }
            // }
          }
          else{
            sinal='';
            print = print.slice(0, -1);
            i = 0;
          }
        }
      }
    }

 
      // let dt = (print = props.slice(0 , -1))
    // let dta;
    // if(arm != ''){
    //   dta = (arm.slice(0 , -1))
    // }
    // print = dt
    // arm = dta

    // if(arm == ''){
    //   arm = 0;
    // }

    // if(armazenar[1] == 0){
    //   sinal = '';
    //   arm = armazenar[0]
    // }

    // if(i == 0){
    //   armazenar[0] = arm

    // }
    // else{
    //   armazenar[1] = arm
    // }
    
    // console.log(dt+ '  ' + dta)
  }

  console.log('\n');
  console.log('print: '+print);
  console.log('\n');
  console.log("Chave: "+ i);
  console.log('\n');
  console.log("primeira entrada: "+ armazenar[0]);
  console.log("Operador: "+ sinal);
  console.log('segunda entra: '+armazenar[1]);
  console.log('total: '+ total);
  console.log('\n');
  

  return(

    <View style={Styles.boxNumpad}>
      
      <Visor input={print} soma={total}/>

      <View style={Styles.boxNum}>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorOperacao('%')}>
          <Text style={Styles.functionsButton}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorOperacao('/')}>
          <Text style={Styles.functionsButton}>/</Text>
        </TouchableOpacity>
      

      
        <TouchableOpacity style={Styles.boxButton} onPress={()=>{deletar(print)}}>
          <Icon style={Styles.functionsButton} name='delete'/>
        </TouchableOpacity>
      

        <TouchableOpacity style={Styles.boxButton} onPress={()=>reiniciar('')}>
          <Text style={Styles.functionsButton}>AC</Text>
        </TouchableOpacity>
           
      </View>

      <View style={Styles.boxNum}>
            
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('1')}>
          <Text style={Styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('2')}>
          <Text style={Styles.buttonText}>2</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('3')}>
          <Text style={Styles.buttonText}>3</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorOperacao('*')}>
          <Text style={Styles.functionsButton}>*</Text>
        </TouchableOpacity>

      </View>

      <View style={Styles.boxNum}>
            
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('4')}>
          <Text style={Styles.buttonText}>4</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('5')}>
          <Text style={Styles.buttonText}>5</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('6')}>
          <Text style={Styles.buttonText}>6</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorOperacao('-')}>
          <Text style={Styles.functionsButton}>-</Text>
        </TouchableOpacity>
       

      </View>

      <View style={Styles.boxNum}>
            
        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('7')}>
          <Text style={Styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('8')}>
          <Text style={Styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('9')}>
          <Text style={Styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorOperacao('+')}>
          <Text style={Styles.functionsButton}>+</Text>
        </TouchableOpacity>


      </View>

      <View style={Styles.boxNum}>

        <TouchableOpacity style={Styles.boxButton} onPress={()=>{}}>
          <Icon style={Styles.functionsButton} name='maximize-2'/> 
        </TouchableOpacity>


        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('0')}>
          <Text style={Styles.buttonText}>0</Text>
        </TouchableOpacity>



        <TouchableOpacity style={Styles.boxButton} onPress={()=>valorNumber('.')}>
          <Text style={Styles.buttonText}>.</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={Styles.specialButton} onPress={()=>{(result())}}>
          <Text style={Styles.specialButtonText}>=</Text>
        </TouchableOpacity>
           
      </View>

    </View>
  
  )
}
