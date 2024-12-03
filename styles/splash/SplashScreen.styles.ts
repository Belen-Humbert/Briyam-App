// SplashScreen.styles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    padding: 20, // Añade un padding para evitar que esté muy pegado a los bordes
  },
  logo: {
    width: width * 1.2, // Ajusta el tamaño para ocupar el 120% del ancho de la pantalla
    height: height * 1.1, // Ajusta el tamaño para ocupar el 110% de la altura de la pantalla
    resizeMode: 'contain', // Asegúrate de que la imagen se ajuste correctamente
  },
});

export default styles;
