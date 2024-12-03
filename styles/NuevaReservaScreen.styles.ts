import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        paddingBottom: 10,
        textAlign: 'left',
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    dateText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    calendarButton: {
        backgroundColor: "#28a745",
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    iconCalendar: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    continueButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
