// FormacionModal.tsx
import React from 'react';
import { Modal, Button } from 'native-base';
import { FormacionModalProps } from '@types/FormacionModalProps.types'; // Ajusta la ruta según tu estructura
import FormacionModalContent from '@components/FormacionModalContent'; // Ajusta la ruta según tu estructura

const FormacionModal: React.FC<FormacionModalProps> = ({
  isOpen,
  onClose,
  selectedFormacion,
  setSelectedFormacion,
  handleUpdate,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Seleccionar Formación Académica</Modal.Header>
        <Modal.Body>
          <FormacionModalContent
            selectedFormacion={selectedFormacion}
            setSelectedFormacion={setSelectedFormacion}
          />
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

export default FormacionModal;
