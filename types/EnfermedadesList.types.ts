// EnfermedadesList.types.ts
export interface EnfermedadesListProps {
    enfermedades: string[];
    selectedEnfermedades: string[];
    setSelectedEnfermedades: (enfermedades: string[]) => void;
  }
  