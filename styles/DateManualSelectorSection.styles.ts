import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrow: {
        fontSize: 24,
        padding: 10,
        color: '#28a745',
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Centra horizontalmente los días
        alignItems: 'center',     // Centra verticalmente los días
        marginVertical: 10,
        flex: 1,
    },
    dayButton: {
        padding: 20,              // Hacemos los botones más grandes
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginHorizontal: 15,     // Espaciamos los botones horizontalmente
    },
    selectedDayButton: {
        backgroundColor: '#28a745',
    },
    dayText: {
        fontSize: 16,             // Aumentamos el tamaño del texto
        textAlign: 'center',
    },
});

export default styles;
