import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '@styles/registrate/FormFooter.styles'; // Importa los estilos

const FormFooter: React.FC = () => {
  useEffect(() => {
    
  }, []); // Log de renderización del componente

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Al registrarte, aceptas nuestros <Text style={styles.linkText}>Términos de Servicio</Text> y <Text style={styles.linkText}>Política de Privacidad</Text>.
      </Text>
    </View>
  );
};

export default FormFooter;
