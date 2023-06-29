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
  header: {
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    height: 40,
    width: '95%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 50,
    backgroundColor: '#ffbf5b',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  buttonText:{
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  recipesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeItem: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
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
  recipeTitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
