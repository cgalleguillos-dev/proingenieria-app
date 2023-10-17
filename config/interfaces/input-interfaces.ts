import {Hour, Inference} from "@/config/interfaces/index";

export interface UserLoginInput {
    email: string;
    password: string;
}

interface UserRegisterInput {

}

export interface PersonalFormDateInput {
    initDateAM: string;
    endDateAM: string;
    initDatePM: string;
    endDatePM: string;
    drivingHours: number;
}

export interface ActivityInput {
    idHour: number;
    hour: string;
    name: string;
}

export interface InferenceInput {
    hour: Hour;
    inference: Inference;
    description: string;
}