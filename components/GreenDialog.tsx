import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { GreenDialogProps } from '@/types/greendialog/GreenDialog.types'; // Importa la interfaz
import styles from '@styles/greendialog/GreenDialog.styles'; // Importa los estilos

const GreenDialog: React.FC<GreenDialogProps> = ({ visible, onClose, message }) => {
  if (visible) {
    
  }

  const handlePress = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handlePress}
    >
      <View style={styles.container}>
        <View style={styles.dialog}>
          <Image 
            source={require('@images/nike_yellow.png')} 
            style={styles.image} 
          />
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GreenDialog;
