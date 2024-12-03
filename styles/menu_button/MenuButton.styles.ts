// MenuButton.styles.ts

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 140,
    height: 140
  },
  menuButtonHovered: {
    transform: [{ scale: 1.05 }],
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },
  menuIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default styles;
