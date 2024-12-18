import {StyleSheet} from 'react-native';
import colors from '../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  headingText: {
    color: colors.black,
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 20,
  },
  scrollContainer: {
    alignSelf: 'center',
    marginTop: 40,
    marginHorizontal:20,
  },
  resultText: {
    textAlign: 'center',
    justifyContent: 'center',
    color:'green',
    fontSize:18,
  },
  stopButton: {
    width: 'auto',
    // height: 40,
    paddingVertical:13,
    paddingHorizontal: 20,  
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 30,
    borderWidth:1,
    borderColor:'red',
    bottom: 50,
  },
  stopText:{
    color:colors.red,
    fontSize:18,
    textAlign:'center',
    fontWeight:'500',
    // marginBottom:30,
  },
  micImage: {
    height: 45,
    width: 45,
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 40,
  },
  startEnd: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recognizedText: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
});
