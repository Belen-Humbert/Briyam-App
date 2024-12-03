import { Box, Input, Text } from "native-base";
import React from "react";
import { UserInfoSectionProps } from '@/types/user_info_section/UserInfoSection.types';
import styles from '@styles/user_info_section/UserInfoSection.styles';

const UserInfoSection: React.FC<UserInfoSectionProps> = ({
  nombre,
  setNombre,
  apellidoPaterno,
  setApellidoPaterno,
  apellidoMaterno,
  setApellidoMaterno,
  telefono,
  setTelefono,
  email,
  setEmail,
}) => {
  
  return (
    <Box>
      <Box mb={4}>
        <Text style={styles.label}>Nombre</Text>
        <Input value={nombre} onChangeText={setNombre} placeholder="Nombre" backgroundColor="white"/>
      </Box>
      <Box mb={4}>
        <Text style={styles.label}>Apellido Paterno</Text>
        <Input value={apellidoPaterno} onChangeText={setApellidoPaterno} placeholder="Apellido Paterno" backgroundColor="white"/>
      </Box>
      <Box mb={4}>
        <Text style={styles.label}>Apellido Materno</Text>
        <Input value={apellidoMaterno} onChangeText={setApellidoMaterno} placeholder="Apellido Materno" backgroundColor="white" />
      </Box>
      <Box mb={4}>
        <Text style={styles.label}>Teléfono</Text>
        <Input value={telefono} onChangeText={setTelefono} placeholder="Teléfono" keyboardType="phone-pad" backgroundColor="white" />
      </Box>
      <Box mb={4}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <Input value={email} onChangeText={setEmail} placeholder="Correo Electrónico" keyboardType="email-address" backgroundColor="white" />
      </Box>
    </Box>
  );
};

export default UserInfoSection;
