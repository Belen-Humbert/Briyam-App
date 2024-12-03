// MenuButtonsGroup.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuir el espacio equitativamente entre los botones
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10, // Ajustar el espacio lateral según sea necesario
  },
  menuButton: {
    flex: 1, // Cada botón ocupa la misma proporción del contenedor
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    padding: 10,
    height: 140,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#007bff',
  },
});

export default styles;
