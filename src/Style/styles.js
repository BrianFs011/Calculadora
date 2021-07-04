import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
  display:{
    flex: 1,
    marginRight: 30,
    marginBottom: 10,
  },
  displayValue:{
    fontSize: 70,
    color: '#000',
  },
  displayValueResult:{
    fontSize: 30,
    color: '#444',
  },
  boxNumPad:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button:{
    height: 70,
    width: Dimensions.get('window').width/4,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
  },
  fontButton:{
    fontSize: 40,
  },
  operationButton:{
    color:'#fa8231',
    fontSize: 40,
  },
  especialOperation:{
    color: '#fff',
  },
  especialButton:{
    height: 60,
    width: 60,
    marginTop: 5,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    backgroundColor:'#fa8231',
    borderRadius: 100,
  }
})