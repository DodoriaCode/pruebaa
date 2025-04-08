export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'Pendiente' | 'En Proceso' | 'Completada';
  dueDate: string;
  character?: string;
}
