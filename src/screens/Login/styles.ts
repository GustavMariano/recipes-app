import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#edf4fe',
    paddingTop: 60,
    paddingHorizontal: 8
  },
  inputContainer:{
    width:350,
    alignItems: 'center',
    marginTop: 20
  },

  logo:{
    width:200,
    height:300,
    marginTop:"10%",
    marginBottom:20,

  },

  input:{
    backgroundColor: '#ffffff',
    width: '95%',
    height: 60,
    color: 'black',
    fontSize: 14,
    padding: Platform.OS === 'ios' ? 13 : 10,
    marginBottom: '3%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c1c2c4'
  },
 
  loginButton: {
    marginTop: '10%',
    backgroundColor: '#ffa336',
    width: '95%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#111',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
},

loginText: {
  color: '#fff',
  fontSize: 15,
  fontStyle: 'italic',
  fontWeight: '600'

},




});