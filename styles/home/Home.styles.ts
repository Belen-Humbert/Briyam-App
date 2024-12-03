import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
        height:1250
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 5,
    },
    doctorName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    branchSelector: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
        width: 150,
    },
    picker: {
        height: 40,
        color: '#333',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 30
    },
    menuButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#007bff', // Borde azul para los botones
    },
    menuIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
    menuText: {
        color: '#333',
        fontSize: 16,
    },
    balanceContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceIcon: {
        width: 44,
        height: 44,
        borderRadius: 5,
        marginRight: 10,
    },
    planDetails: {
        flexDirection: 'column',
    },
    planTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    planSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    planValidity: {
        fontSize: 14,
        color: '#007bff',
    },
    walletTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    walletBalance: {
        fontSize: 16,
        color: '#333',
    },
    reservationContainer: {
        marginBottom: 20,
    },
    reservationCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    reservationImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    reservationDetails: {
        marginLeft: 10,
        flex: 1,
    },
    reservationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reservationSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    reservationDate: {
        fontSize: 14,
        color: '#007bff',
    },
    reservationTimes: {
        flexDirection: 'row',
        marginTop: 5,
    },
    timeText: {
        fontSize: 12,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    viewButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    viewButtonText: {
        color: 'white',
        fontSize: 14,
    },
    addButton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    addButtonText: {
        color: 'white',
        fontSize: 14,
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Fondo oscuro para el modal
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default styles;
