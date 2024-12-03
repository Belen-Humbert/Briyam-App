import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#F4F4F4',
  },
  innerScrollContainer:{
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Inter_700Bold',  // Asegúrate de usar la fuente "Inter" en negrita
    textAlign: 'center',
  },
  welcomeContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoImage: {
    width: 200, // Ajusta el ancho del logo según lo que necesites
    height: 100, // Ajusta la altura del logo según lo que necesites
    resizeMode: 'contain',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  }
});

export default styles;
