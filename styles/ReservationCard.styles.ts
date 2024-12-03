import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const adjustFontSize = (size: number): number => {
    if (width < 360) {
        return size * 0.85; 
    } else if (width < 768) {
        return size; 
    } else {
        return size * 1.15; 
    }
};

const styles = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: 'row'
    },
    reservationCard: {
        flexDirection: 'row',
        padding: width * 0.04, 
        marginVertical: width * 0.03, 
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    reservationImage: {
        width: width * 0.2, 
        height: width * 0.2,
        borderRadius: 10,
        marginRight: width * 0.04, 
    },
    reservationDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    reservationTitle: {
        fontSize: adjustFontSize(16),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: width * 0.02,
    },
    reservationSubtitle: {
        fontSize: adjustFontSize(14),
        color: '#666',
        marginBottom: width * 0.025,
    },
    reservationDate: {
        fontSize: adjustFontSize(14),
        color: '#666',
        marginBottom: width * 0.025,
    },
    reservationTimes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: width * 0.025,
    },
    timeText: {
        fontSize: adjustFontSize(14),
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Espaciado entre botones
        marginTop: width * 0.02,
        width: 300,
        height: 45
    },
    viewButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        paddingVertical: width * 0.025,
        marginHorizontal: width * 0.015, // Aumentar espaciado horizontal
        borderRadius: 15,
        alignItems: 'center',
    },
    viewButtonText: {
        color: '#fff',
        fontSize: adjustFontSize(14),
        textAlign: 'center'
    },
    addButton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: width * 0.025,
        marginHorizontal: width * 0.015, // Aumentar espaciado horizontal
        borderRadius: 15,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: adjustFontSize(14),
        textAlign: 'center'
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#F44336',
        paddingVertical: width * 0.025,
        marginHorizontal: width * 0.015, // Aumentar espaciado horizontal
        borderRadius: 15,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: adjustFontSize(14),
        textAlign: 'center'
    },
});

export default styles;
