import { Activity, Form, Inference, WorkingHour, User, Job, Role, PersonalOptionsInterface } from '@/config/interfaces';
import APP_ICON from '../assets/proIngenieriaIcon.png';

export const APP_NAME = 'ProIngenieria';
export const APP_ICON_IMAGE = APP_ICON.src;

export const FORMS: Form[] = [
    {
        id: 1,
        name: 'Formulario de Inscripción 1',
        dateOfExpiry: new Date('2021-01-01'),
        done: false,
    },
    {
        id: 2,
        name: 'Formulario de Inscripción 2',
        dateOfExpiry: new Date('2021-01-01'),
        done: false,
    },
    {
        id: 3,
        name: 'Formulario de Inscripción 3',
        dateOfExpiry: new Date('2021-01-01'),
        done: true,
    },
    {
        id: 4,
        name: 'Formulario de Inscripción 4',
        dateOfExpiry: new Date('2021-01-01'),
        done: false,
    }
]

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

export const timeOptionsAM: string[] = generateTimeOptions().slice(0, 12);

export const timeOptionsPM: string[] = generateTimeOptions().slice(12, 20);

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
        role: 'Supervisor',
    },
    {
        id: 2,
        personal: 'Buzo Comercial',
        role: 'Mantenedor Marítimo',
    },
    {
        id: 3,
        personal: 'Operarios',
        role: 'Jefe de Proyecto',
    },
    {
        id: 4,
        personal: 'Ingeniero',
        role: 'Mantenedor Marítimo',
    },
    {
        id: 5,
        personal: 'Otros',
        role: 'Líder de Grupo',
    }
];

export const BuceoOptions: string[] = [
    'Horas Inicio de Buceo',
    'Hora Termino de Buceo',
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

const roles: Role[] = [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Visador" },
    { id: 3, name: "Ejecutor" },
];

export const users: User[] = [
    {
        id: 1,
        name: "gerente_general",
        fullName: "Gerente General",
        rut: "11111111-1",
        email: "gerente_general@example.com",
        password: "password123",
        job: jobs[0],
        role: roles[0],
    },
    {
        id: 2,
        name: "gerente_proyectos",
        fullName: "Gerente de Proyectos",
        rut: "22222222-2",
        email: "gerente_proyectos@example.com",
        password: "password123",
        job: jobs[3],
    },
    {
        id: 3,
        name: "gerente_admin",
        fullName: "Gerente de Administración",
        rut: "33333333-3",
        email: "gerente_admin@example.com",
        password: "password123",
        job: jobs[2],
        role: roles[1],
    },
    {
        id: 4,
        name: "jefe_proyecto1",
        fullName: "Jefe de Proyecto 1",
        rut: "44444444-4",
        email: "jefe_proyecto1@example.com",
        password: "password123",
        job: jobs[3],
        role: roles[2],
    },
    {
        id: 5,
        name: "jefe_proyecto2",
        fullName: "Jefe de Proyecto 2",
        rut: "55555555-5",
        email: "jefe_proyecto2@example.com",
        password: "password123",
        job: jobs[3],
        role: roles[2],
    },
    {
        id: 6,
        name: "jefe_proyecto3",
        fullName: "Jefe de Proyecto 3",
        rut: "66666666-6",
        email: "jefe_proyecto3@example.com",
        password: "password123",
        job: jobs[3],
        role: roles[2],
    },
    {
        id: 7,
        name: "jefe_proyecto4",
        fullName: "Jefe de Proyecto 4",
        rut: "77777777-7",
        email: "jefe_proyecto4@example.com",
        password: "password123",
        job: jobs[3],
        role: roles[2],
    },
    {
        id: 8,
        name: "supervisor1",
        fullName: "Supervisor 1",
        rut: "88888888-8",
        email: "supervisor1@example.com",
        password: "password123",
        job: jobs[4],
        role: roles[2],
    },
    {
        id: 9,
        name: "supervisor2",
        fullName: "Supervisor 2",
        rut: "99999999-9",
        email: "supervisor2@example.com",
        password: "password123",
        job: jobs[4],
        role: roles[2],
    },
    {
        id: 10,
        name: "lider_grupo1",
        fullName: "Líder de Grupo 1",
        rut: "10101010-0",
        email: "lider_grupo1@example.com",
        password: "password123",
        job: jobs[5],
    },
    {
        id: 11,
        name: "lider_grupo2",
        fullName: "Líder de Grupo 2",
        rut: "11111111-1",
        email: "lider_grupo2@example.com",
        password: "password123",
        job: jobs[5],
    },
    {
        id: 12,
        name: "lider_grupo3",
        fullName: "Líder de Grupo 3",
        rut: "12121212-1",
        email: "lider_grupo3@example.com",
        password: "password123",
        job: jobs[5],
    },
    {
        id: 13,
        name: "lider_grupo4",
        fullName: "Líder de Grupo 4",
        rut: "13131313-1",
        email: "lider_grupo4@example.com",
        password: "password123",
        job: jobs[5],
    },
    {
        id: 14,
        name: "mantenedor_maritimo1",
        fullName: "Mantenedor Marítimo 1",
        rut: "14141414-1",
        email: "mantenedor_maritimo1@example.com",
        password: "password123",
        job: jobs[6],
    },
    {
        id: 15,
        name: "mantenedor_maritimo2",
        fullName: "Mantenedor Marítimo 2",
        rut: "15151515-1",
        email: "mantenedor_maritimo2@example.com",
        password: "password123",
        job: jobs[6],
    },
    {
        id: 16,
        name: "mantenedor_maritimo3",
        fullName: "Mantenedor Marítimo 3",
        rut: "16161616-1",
        email: "mantenedor_maritimo3@example.com",
        password: "password123",
        job: jobs[6],
    },
    {
        id: 17,
        name: "mantenedor_maritimo4",
        fullName: "Mantenedor Marítimo 4",
        rut: "17171717-1",
        email: "mantenedor_maritimo4@example.com",
        password: "password123",
        job: jobs[6],
    },
];

export const getUsersByJob = (jobName: string) => {
    const job = jobs.find(job => job.name === jobName);
    if (!job) return [];

    return users.filter(user => user.job.id === job.id);
}


export const supervisors = getUsersByJob('Supervisor');
export const divers = getUsersByJob('Mantenedor Marítimo');