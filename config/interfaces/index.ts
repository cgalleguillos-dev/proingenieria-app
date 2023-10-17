export interface Form {
    id: number;
    name: string;
    dateOfExpiry: Date;
    done: boolean;
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
    job: string;
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


export interface ReportUser {
    user: User;
    dailyReport: DailyReport;
}
export interface Project {
    id: number;
    name: string;
    isComplete: boolean;
}

export interface DailyReport {
    id: string;
    name: string;
    date: string;
    project: Project;
    ReportUser: ReportUser[];
    isApproved: boolean;
    isComplete: boolean;
    drivingHours: number;
    DailyreportAsistence: DailyreportAsistence[];
    InferenceReport: InferenceReport[];
    ActivityReport: ActivityReport[];

}

export interface DailyreportAsistence {
    user: User;
}

export interface InferenceReport {
    id: string;
    inference: Inference;
    hour: Hour;
    name: string;
}

export interface ActivityReport {
    id: string;
    hour: Hour;
    name: string;
}
export interface Hour {
    id: number;
    hour: string;
}
export interface InferenceType {
    id: string;
    name: string;
}

export interface Inference {
    id: string;
    name: string;
    inferenceType: InferenceType;
}

export interface ActivityReport {
    id: string;
    hour: Hour;
    dailyReport: DailyReport;
    name: string;
}