import React, { useState } from 'react';
import { Box, HStack, Text } from 'native-base';
import SpecialtyModal from '@components/SpecialtyModal';
import EnfermedadesModal from '@components/EnfermedadesModal';
import FormacionModal from '@components/FormacionModal';
import SpecialtySection from '@components/SpecialtySection';
import EnfermedadesSection from '@components/EnfermedadesSection';
import EducacionSection from '@components/EducacionSection';
import { ExperienciaInfoSectionProps } from '@types/ExperienciaInfoSectionProps.types'; // Asegúrate de que la ruta sea correcta

const ExperienciaInfoSection: React.FC<ExperienciaInfoSectionProps> = ({
  isEditMode,
  medicoInf,
  marginTop
}) => {
  
  const [isSpecialtyModalOpen, setIsSpecialtyModalOpen] = useState(false);
  const [isEnfermedadesModalOpen, setIsEnfermedadesModalOpen] = useState(false);
  const [isFormacionModalOpen, setIsFormacionModalOpen] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>(['', '', '', '']);
  const [selectedEnfermedades, setSelectedEnfermedades] = useState<string[]>(['', '', '', '']);
  const [selectedFormacion, setSelectedFormacion] = useState<string[]>(['', '', '', '']);

  const especialidadMedico = medicoInf?.data?.especialidadNombre?.especialidad || 'No especificado';
  const enfermedadesTratadas = [
    medicoInf?.data?.perfilMedico?.enfermedades_tratadas_01,
  ].filter(Boolean).join(', ') || 'No especificado';

  return (
    <Box mt={marginTop}>

      <HStack justifyContent="space-between" alignItems="center" w="100%" mb={10}>
        <Text fontSize="lg" bold color="#0F2661">Experiencia</Text>
      </HStack>

      {/* Especialización */}
      <SpecialtySection
        especialidadMedico={especialidadMedico}
        isEditMode={isEditMode}
        onPress={() => setIsSpecialtyModalOpen(true)}
      />

      {/* Enfermedades Tratadas */}
      <EnfermedadesSection
        enfermedadesTratadas={enfermedadesTratadas}
        isEditMode={isEditMode}
        onPress={() => setIsEnfermedadesModalOpen(true)}
      />

      {/* Educación */}
      <EducacionSection
        isEditMode={isEditMode}
        onPress={() => setIsFormacionModalOpen(true)}
      />

      {/* Modales */}
      <SpecialtyModal
        isOpen={isSpecialtyModalOpen}
        onClose={() => setIsSpecialtyModalOpen(false)}
        selectedSpecialties={selectedSpecialties}
        setSelectedSpecialties={setSelectedSpecialties}
        handleUpdate={() => setIsSpecialtyModalOpen(false)}
        isEditMode={isEditMode}
      />

      <EnfermedadesModal
        isOpen={isEnfermedadesModalOpen}
        onClose={() => setIsEnfermedadesModalOpen(false)}
        selectedEnfermedades={selectedEnfermedades}
        setSelectedEnfermedades={setSelectedEnfermedades}
        handleUpdate={() => setIsEnfermedadesModalOpen(false)}
        isEditMode={isEditMode}
      />

      <FormacionModal
        isOpen={isFormacionModalOpen}
        onClose={() => setIsFormacionModalOpen(false)}
        selectedFormacion={selectedFormacion}
        setSelectedFormacion={setSelectedFormacion}
        handleUpdate={() => setIsFormacionModalOpen(false)}
        isEditMode={isEditMode}
      />

    </Box>
  );
};

export default ExperienciaInfoSection;
