export interface SidebarElement {
  roles: string[];
  href: string;
  detail: string;
  icon?: any;
  active?: boolean;
}

export interface ActivityRecordOutput {
  hourId: number;
  name: string;
}

export interface InferenceOutput {
  inferenceId: string;
  hourId: number;
  name: string;
}