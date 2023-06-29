import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        width: '100%',
        height: 380,
        resizeMode: 'cover',
      },
      contentContainer: {
        padding: 20,
        borderRadius: 40,
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 3,
      },
      recipeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      favoriteButton: {
        padding: 10,
      },
      subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 25,
      },
      ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#D2B48C',
        borderRadius: 25,
      },
      ingredientImage: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
      ingredientText: {
        fontSize: 13,
        fontWeight: 'bold'
      },
      instructions: {
        fontSize: 16,
        fontWeight: '500',

      },
});
