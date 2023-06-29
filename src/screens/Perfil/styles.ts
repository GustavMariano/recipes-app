import { StyleSheet, Dimensions } from 'react-native';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
    
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  recipeContainer: {
    width: itemWidth - 20,
    marginBottom: 16,
    marginLeft: '25%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,

  },
  recipeImage: {
    width: itemWidth - 20,
    height: itemWidth - 80,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    borderWidth: 0.5,
    borderColor: 'lightgray',
  },
  recipeName: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  logout: {
    backgroundColor: '#ffbf5b',
    width: '99%',
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: 'row',
  },
  textLogout: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 15
  },
  logoutIcon: {
    marginTop: 12,
    marginRight: 8
  }
});
