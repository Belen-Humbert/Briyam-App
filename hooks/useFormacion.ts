import { useEffect } from 'react';
import { useFetchFormacionAcademica } from '@hooks/useFetchFormacionAcademica';

const useFormacion = (setSelectedFormacion: (formacion: string[]) => void) => {

  const { formacion, loading, error } = useFetchFormacionAcademica();

  useEffect(() => {
    if (formacion) {
      const formacionArray = [
        formacion.data.formacion.formacion_1 || '',
        formacion.data.formacion.formacion_2 || '',
        formacion.data.formacion.formacion_3 || '',
        formacion.data.formacion.formacion_4 || '',
      ];
      setSelectedFormacion(formacionArray);
    }
  }, [formacion, setSelectedFormacion]);

  return { loading, error };
};

export default useFormacion;
