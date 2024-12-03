import React, { useEffect } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { LoadingDialogProps } from '@/types/loading_dialog/LoadingDialog.types';
import styles from '@styles/loading_dialog/LoadingDialog.styles';

const LoadingDialog: React.FC<LoadingDialogProps> = ({
  visible,
  title = 'Cargando...',
  message = 'Por favor, espera mientras completamos la operación.',
}) => {
  useEffect(() => {
    if (visible) {
      
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.overlay}>
        <Image
            source={require('@images/spinner.gif')} // Cambia a la ruta de tu imagen de spinner
            style={styles.spinner}
            accessible={true}
            accessibilityLabel="Cargando"
          />
      </View>
    </Modal>
  );
};

export default LoadingDialog;
