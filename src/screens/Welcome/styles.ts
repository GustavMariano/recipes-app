import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%', 
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: 0 }, { translateX: 55 }],
     
  },
  logo: {
    width: 300,
    height: 320,
    
  },
  buttonContainer: {
    position: 'absolute',
    top: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButton: {
    marginBottom: 10,
    backgroundColor: '#ffa336',
    width: '75%',
    height: 65,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  cadastroButton: {
    backgroundColor: '#ffa336',
    width: '75%',
    height: 65,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  cadastroText: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
  },
});