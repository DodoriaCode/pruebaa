import { Task } from "src/app/models/task.model";


export const TASKS_MOCK: Task[] = [
  {
    id: 1,
    title: 'Diseñar prototipo',
    description: 'Crear wireframes para la nueva app',
    status: 'Pendiente',
    dueDate: '2025/05/21',
    character: 'Rick Sanchez'
  },
  {
    id: 2,
    title: 'Reunión de planificación',
    description: 'Sprint Planning con el equipo de desarrollo',
    status: 'En Proceso',
    dueDate: '2025/05/23',
    character: 'Morty Smith'
  },
  {
    id: 3,
    title: 'Publicar versión estable',
    description: 'Hacer deploy en producción',
    status: 'Completada',
    dueDate: '2025/05/18',
    character: 'Summer Smith'
  },
  {
    id: 4,
    title: 'Revisión de bugs',
    description: 'Analizar los reportes del último testeo',
    status: 'Pendiente',
    dueDate: '2025/05/25',
    character: 'Beth Smith'
  },
  {
    id: 5,
    title: 'Documentación técnica',
    description: 'Actualizar documentación del backend',
    status: 'En Proceso',
    dueDate: '2025/05/22',
    character: 'Jerry Smith'
  },
  {
    id: 6,
    title: 'Crear endpoints API',
    description: 'Desarrollar endpoints para el nuevo módulo',
    status: 'Pendiente',
    dueDate: '2025/05/28',
    character: 'Birdperson'
  },
  {
    id: 7,
    title: 'Test unitarios',
    description: 'Escribir pruebas para los servicios',
    status: 'Completada',
    dueDate: '2025/05/17',
    character: 'Mr. Meeseeks'
  },
  {
    id: 8,
    title: 'Revisión UX',
    description: 'Evaluar la experiencia de usuario en mobile',
    status: 'Pendiente',
    dueDate: '2025/05/30',
    character: 'Squanchy'
  },
  {
    id: 9,
    title: 'Actualizar dependencias',
    description: 'Revisar seguridad y actualizar paquetes',
    status: 'En Proceso',
    dueDate: '2025/05/24',
    character: 'Evil Morty'
  },
  {
    id: 10,
    title: 'Demo cliente',
    description: 'Preparar presentación para el cliente final',
    status: 'Completada',
    dueDate: '2025/05/19',
    character: 'Tammy Guetermann'
  }
];
