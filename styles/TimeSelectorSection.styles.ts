import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    timeContainer: {
        padding: 10,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
    },
    timeButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginHorizontal: 5,
        minWidth: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeButtonSelected: {
        backgroundColor: '#28a745',
    },
    timeText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default styles;
