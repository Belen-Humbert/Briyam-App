// getDayColor.ts
export const getDayColor = (day: string): string => {
    const dayColors: Record<string, string> = {
      lunes: '#FFEBE9',
      martes: '#FFF5E1',
      miércoles: '#E6F7FF',
      jueves: '#EAF4FF',
      viernes: '#F3E5F5',
      sábado: '#E8F5E9',
      domingo: '#FFF3E0',
    };
    
    return dayColors[day.toLowerCase()] || 'white';
  };
  