export interface Form {
    id: number;
    name: string;
    dateOfExpiry: Date;
    done: boolean;
}

export interface Inference {
    id: number;
    description: string;
    type: string;
}

export interface WorkingHour {
    initHour: string;
    endHour: string;
}

export interface Activity {
    id: number;
    time: string;
    description: string;
}

export interface PersonalFormDateInput {
    initDateAM: string;
    endDateAM: string;
    initDatePM: string;
    endDatePM: string;
}

export interface InferenceFormInput {
    hour: string;
    idInference: string;
    description: string;
}

export interface PersonalOptionsInterface {
    id: number;
    personal: string;
    role: string;
}

export interface Job {
    id: number;
    name: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
    fullName?: string;
    rut?: string;
    email: string;
    password: string;
    job: Job;
    role?: Role;
}