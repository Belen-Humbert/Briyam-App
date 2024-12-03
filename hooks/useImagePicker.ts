// useImagePickerLogic.ts
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { UseImagePickerLogic } from '@types/useImagePickerLogic.types';

const useImagePickerLogic = (): UseImagePickerLogic => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async (): Promise<void> => {

    try {
        
      // Solicita permisos para acceder a la galería
      const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!granted) {
        alert("Se necesitan permisos para acceder a la galería.");
        return;
      }

      // Abre el selector de imágenes
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // Verifica si se seleccionó una imagen
      if (!result.canceled && result.assets?.[0]?.uri) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
    }
  };

  return { selectedImage, pickImage };
};

export default useImagePickerLogic;
