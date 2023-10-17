import {Activity, Form, Inference, Job, PersonalOptionsInterface, Role, User} from '@/config/interfaces';
import APP_ICON from '../assets/proIngenieriaIcon.png';

export const APP_NAME = 'ProIngenieria';
export const APP_ICON_IMAGE = APP_ICON.src;

export const INFERENCES: Inference[] = [
    { id: 1, description: "Permisos de Buceo", type: "Directa" },
    { id: 2, description: "Falta Permiso de Trabajo PT", type: "Directa" },
    { id: 3, description: "Estado de Equipos", type: "Directa" },
    { id: 4, description: "Estado de herramientas", type: "Directa" },
    { id: 5, description: "Accidente laboral", type: "Directa" },
    { id: 6, description: "Falta de dotación", type: "Directa" },
    { id: 7, description: "Contagio de COVID", type: "Directa" },
    { id: 8, description: "Incidente Ambiental", type: "Directa" },
    { id: 9, description: "Falta de EPP", type: "Directa" },
    { id: 10, description: "Reprogramación Trabajos", type: "Indirecta" },
    { id: 11, description: "Condición Climática", type: "Indirecta" },
    { id: 12, description: "Puerto Cerrado", type: "Indirecta" },
    { id: 13, description: "Falta de insumos y materiales por parte del cliente", type: "Indirecta" },
    { id: 14, description: "Contagio de COVID", type: "Indirecta" },
    { id: 15, description: "Trabajo en la misma vertical, Izaje", type: "Indirecta" },
    { id: 16, description: "Paros y Huelgas externas", type: "Indirecta" },
    { id: 17, description: "Manifestaciones", type: "Indirecta" },
    { id: 18, description: "Cambio Planificación por parte del Cliente", type: "Indirecta" },
];

//working hours is 08:00 to 13:00 to 17:00, then extra hours is 17:00 to 19:00, interval is 30 minutes

export const generateTimeOptions = (): string[] => {
    const timeOptions: string[] = [];
    for (let i = 8; i < 20; i++) {
        if (i < 10) {
            timeOptions.push(`0${i}:00`);
            timeOptions.push(`0${i}:30`);
        } else {
            timeOptions.push(`${i}:00`);
            timeOptions.push(`${i}:30`);
        }
    }
    return timeOptions;
};

export const FormActivity: Activity[] = [
    { id: 0, time: "08:00", description: "" },
    { id: 1, time: "08:30", description: "" },
    { id: 2, time: "09:00", description: "" },
    { id: 3, time: "09:30", description: "" },
    { id: 4, time: "10:00", description: "" },
    { id: 5, time: "10:30", description: "" },
    { id: 6, time: "11:00", description: "" },
    { id: 7, time: "11:30", description: "" },
    { id: 8, time: "12:00", description: "" },
    { id: 9, time: "12:30", description: "" },
    { id: 10, time: "13:00", description: "" },
    { id: 11, time: "14:00", description: "" },
    { id: 12, time: "14:30", description: "" },
    { id: 13, time: "15:00", description: "" },
    { id: 14, time: "15:30", description: "" },
    { id: 15, time: "16:00", description: "" },
    { id: 16, time: "16:30", description: "" },
    { id: 17, time: "17:00", description: "" },
    { id: 18, time: "17:30", description: "" },
    { id: 19, time: "18:00", description: "" },
    { id: 20, time: "18:30", description: "" },
    { id: 21, time: "19:00", description: "" },
];

export const PersonalOptions: PersonalOptionsInterface[] = [
    {
        id: 1,
        personal: 'Supervisor Buceo',
        job: 'Gerente General',
    },
    {
        id: 2,
        personal: 'Buzo Comercial',
        job: 'Mantenedor Marítimo',
    },
    {
        id: 3,
        personal: 'Operarios',
        job: 'Jefe de Proyecto',
    },
    {
        id: 4,
        personal: 'Ingeniero',
        job: 'Mantenedor Marítimo',
    },
    {
        id: 5,
        personal: 'Otros',
        job: 'Líder de Grupo',
    }
];

export const jobs: Job[] = [
    { id: 1, name: "Gerente General" },
    { id: 2, name: "Gerente de Operaciones" },
    { id: 3, name: "Gerente de Administración" },
    { id: 4, name: "Jefe de Proyecto" },
    { id: 5, name: "Supervisor" },
    { id: 6, name: "Líder de Grupo" },
    { id: 7, name: "Mantenedor Marítimo" },
];

export const getUsersByJob = (jobName: string, users: User[]) => {
    const job = jobs.find(job => job.name === jobName);
    if (!job) return [];
    return users.filter(user => user.job.name === job.name);
    // return users.filter(user => user.job === job);
}