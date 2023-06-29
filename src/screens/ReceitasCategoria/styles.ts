import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemWidth = (windowWidth - 32) / numColumns;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fafafa'
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 26,
    textAlign: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeItem: {
    width: itemWidth,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  recipeImage: {
    width: itemWidth - 20,
    height: itemWidth - 80,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    borderWidth: 0.5,
    borderColor: 'lightgray'
  },
  recipeName: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '500'
  },
});
