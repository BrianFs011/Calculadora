import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';

import Styles from '../Styles/styles';

export default ()=>{
  return(
    <View style={Styles.boxNumpad}>

      <View style={Styles.boxNum}>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.functionsButton}>%</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.functionsButton}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Icon style={Styles.functionsButton} name='delete'/>
          </TouchableOpacity>
        </View>
          
        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Icon style={Styles.functionsButton} name='trash'/>
          </TouchableOpacity>
        </View>
        
      </View>

      <View style={Styles.boxNum}>
        
          <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.buttonText}>1</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.buttonText}>2</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.functionsButton}>*</Text>
            </TouchableOpacity>
          </View>
        
      </View>

      <View style={Styles.boxNum}>
            
        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>5</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.functionsButton}>-</Text>
            </TouchableOpacity>
          </View>

      </View>

      <View style={Styles.boxNum}>
            
        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>7</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>8</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
          <TouchableOpacity>
            <Text style={Styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.boxButton}>
            <TouchableOpacity>
              <Text style={Styles.functionsButton}>+</Text>
            </TouchableOpacity>
          </View>

      </View>

      <View style={Styles.boxNum}>

            <View style={Styles.boxButton}>
              <TouchableOpacity>
                 <Icon style={Styles.functionsButton} name='maximize-2'/> 
              </TouchableOpacity>
            </View>
            
            <View style={Styles.boxButton}>
              <TouchableOpacity>
                <Text style={Styles.buttonText}>0</Text>
              </TouchableOpacity>
            </View>
    
            <View style={Styles.boxButton}>
              <TouchableOpacity>
                <Text style={Styles.buttonText}>.</Text>
              </TouchableOpacity>
            </View>
    
            <View style={Styles.specialButton}>
              <TouchableOpacity>
                <Text style={Styles.specialButtonText}>=</Text>
              </TouchableOpacity>
            </View>
    
          </View>

    </View>
  )
}
