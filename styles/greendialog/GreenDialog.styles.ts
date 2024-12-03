import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  dialog: {
    width: '80%', 
    padding: 30, 
    backgroundColor: '#fff',
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5, 
  },
  image: {
    width: 80, 
    height: 80,
    marginBottom: 20, 
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#FBC02D', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default styles;
