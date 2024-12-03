// SpecialtyModal.tsx
import React, { useEffect } from 'react';
import { Modal, Button, ScrollView } from 'native-base';
import SpecialtySelectSection from '@components/SpecialtySelectSection';
import { SpecialtyModalProps } from '@types/SpecialtyModal.types';

const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  isOpen,
  onClose,
  selectedSpecialties,
  setSelectedSpecialties,
  handleUpdate,
}) => {
  useEffect(() => {
    
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Seleccionar Especialidades</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <SpecialtySelectSection
              selectedSpecialties={selectedSpecialties}
              setSelectedSpecialties={setSelectedSpecialties}
            />
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button onPress={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button onPress={handleUpdate}>
              Actualizar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SpecialtyModal;
