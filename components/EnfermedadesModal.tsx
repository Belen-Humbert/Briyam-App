import React, { useEffect } from 'react';
import { Modal, Button, VStack, Box, ScrollView } from 'native-base';
import { useFetchEnfermedades } from '@hooks/useFetchEnfermedades';
import EnfermedadesList from '@components/EnfermedadesList'; // Nuevo componente
import LoadingOrError from '@components/LoadingOrError'; // Nuevo componente
import { EnfermedadesModalProps } from '@types/EnfermedadesModalProps.types'; // Importa la interfaz

const EnfermedadesModal: React.FC<EnfermedadesModalProps> = ({
  isOpen,
  onClose,
  selectedEnfermedades,
  setSelectedEnfermedades,
  handleUpdate,
}) => {
  
  const { enfermedades, loading, error } = useFetchEnfermedades();

  useEffect(() => {
    if (enfermedades.length > 0) {
      setSelectedEnfermedades(enfermedades);
    }
  }, [enfermedades, setSelectedEnfermedades]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Seleccionar Enfermedades</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <VStack space={4}>
              <Box width="100%">
                <LoadingOrError loading={loading} error={error} />
                {!loading && !error && (
                  <EnfermedadesList
                    enfermedades={enfermedades}
                    selectedEnfermedades={selectedEnfermedades}
                    setSelectedEnfermedades={setSelectedEnfermedades}
                  />
                )}
              </Box>
            </VStack>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={onClose} variant="ghost">Cancelar</Button>
            <Button onPress={handleUpdate}>Actualizar</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default EnfermedadesModal;
