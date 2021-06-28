import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  boxCalculadora:{
    flex: 1,
    backgroundColor: '#ddd',
  },
  boxVisor:{
    flex:2.5,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 250, 
    borderRadius: 10,
    justifyContent:'flex-end',
    alignItems: 'flex-end',
  },
  boxInput:{
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    marginRight: 10
  },

  textInput:{
    color: '#000',
    fontSize: 70,
  },
  textInputAfterSoma:{
    color: '#444',
    fontSize: 30,
  },
  boxTextResult:{
    alignItems: 'flex-end',
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
    paddingBottom: 10,

  },
  boxNum:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  boxButton:{
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{

    fontSize: 40,
  },
  specialButton:{
    borderRadius: 40,
    height: 55,
    width: 55,
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
    fontSize: 30,
  }
})
