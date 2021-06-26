import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  boxCalculadora:{
    flex: 1,
    backgroundColor: '#ddd',
  },
  boxVisor:{
    flex:2.5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    justifyContent:'flex-end',
    alignItems: 'flex-end',
  },
  boxInput:{
    marginRight: 10
  },

  textInput:{
    fontSize: 70,
  },
  textVisor:{
    fontSize:20,
    marginLeft: 10,
    marginTop: 10,
  },
  boxNumpad:{
    paddingTop: 20,
    flex: 2,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  boxNum:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    justifyContent: 'space-evenly',
  },
  boxButton:{
    borderRadius: 100,
    height: '70%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 40,
  },
  specialButton:{
    borderRadius: 40,
    height: 50,
    width: 49,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8000',
  },
  specialButtonText:{
    color: '#fff',
    fontSize: 40,
  },
  functionsButton:{
    color: '#ff8000',
    fontSize: 40,
  }
})
