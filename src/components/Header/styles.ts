import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    userContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
        backgroundColor: '#ffbf5b',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
        marginRight: 10,
        
    },
    userName: {
        paddingLeft: 10,
        fontWeight: '500',
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    }
});