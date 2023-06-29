import { StyleSheet, Dimensions } from 'react-native';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fafafa'
    },
    pageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 26,
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    categoryContainer: {
        width: itemWidth - 20,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
      
    },
    categoryImage: {
        width: itemWidth - 20,
        height: itemWidth - 80,
        borderRadius: 8,
        backgroundColor: '#fafafa',
        borderWidth: 0.5,
        borderColor: 'lightgray'
    },
    categoryName: {
        marginTop: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        fontStyle: 'italic',
    },
});
