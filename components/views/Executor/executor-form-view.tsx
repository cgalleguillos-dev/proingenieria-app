'use client';
import React, {useState} from 'react';
import {Hour, Inference, User} from "@/config/interfaces";
import {ActivityInput, InferenceInput, PersonalFormDateInput} from "@/config/interfaces/input-interfaces";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {HoursTable} from "@/components/views/Executor/hours-table";
import {PersonalTable} from "@/components/views/Executor/personal-table";
import {ActivityTable} from "@/components/views/Executor/activity-table";
import {InferenceTable} from "@/components/views/Executor/inference-table";
import {Button} from "@nextui-org/button";
import {ActivityRecordOutput, InferenceOutput} from "@/config/interfaces/component-interfaces";
import {hoursBetween} from "@/utils";
import {Input} from "@nextui-org/input";
interface Props {
  hours: Hour[];
  users: User[];
  inferences: Inference[],
  dailyReportId: string;
}

export const ExecutorFormView: React.FC<Props> = ({hours, users, inferences, dailyReportId}) => {
  const [personalDateInput, setPersonalDateInput] = useState<PersonalFormDateInput>({
    initDateAM: "", initDatePM: "", endDateAM: "", endDatePM: "", drivingHours: 0
  } as PersonalFormDateInput);
  const [personalUsersInput, setPersonalUsersInput] = React.useState<string[]>([]);
  const [activities, setActivities] = React.useState<ActivityInput[]>(
    hours.map((hour) => ({
        idHour: hour.id,
        hour: hour.hour,
        name: ""
      })
    ));

  const [inferencesInput, setInferencesInput] = React.useState<InferenceInput[]>([]);

  const disableButton = () => {
    return personalUsersInput.length === 0 || activities.length === 0 || inferencesInput.length === 0;
  }
  const handleActivityChange = (idHour: number, value: string) => {
    const newActivities = activities.map((activity) => {
      if (activity.idHour === idHour) {
        return {...activity, name: value};
      }
      return activity;
    });
    setActivities(newActivities);
  }

  const handleSave = async () => {
    const amOptions = hours.slice(0, 12)
    const pmOptions = hours.slice(12, 20)
    const activityReports = activities.filter((activity) => activity.name !== "");
    const activityRecordOutput: ActivityRecordOutput[] = activityReports.map((activity) => {
      return {
        hourId: activity.idHour,
        name: activity.name
      }
    });
    let drivingHours = 0;
    const amInitDate = amOptions.find((hour) => hour.id.toString() === personalDateInput.initDateAM)?.hour!;
    const amEndDate = amOptions.find((hour) => hour.id.toString() === personalDateInput.endDateAM)?.hour!;
    const pmInitDate = pmOptions.find((hour) => hour.id.toString() === personalDateInput.initDatePM)?.hour!;
    const pmEndDate = pmOptions.find((hour) => hour.id.toString() === personalDateInput.endDatePM)?.hour!;
    if (amInitDate && amEndDate) {
      drivingHours += hoursBetween(amInitDate, amEndDate);
    }
    if (pmInitDate && pmEndDate) {
      drivingHours += hoursBetween(pmInitDate, pmEndDate);
    }
    const dailyReportAsistence = personalUsersInput;
    const inferenceOutput: InferenceOutput[] = inferencesInput.map((inference) => {
      return {
        inferenceId: inference.inference.id,
        name: inference.description,
        hourId: inference.hour.id
      }
    });

    const report = {
      dailyReportAsistence,
      activityReport: activityRecordOutput,
      inferenceOutput,
      drivingHours,
      dailyReportId
    }
    const res = await fetch('http://localhost:3000/api/dailyreport/' + dailyReportId, {
      method: 'PUT',
      body: JSON.stringify(report),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
      <div className="flex flex-col items-center justify-center">
        <Accordion defaultExpandedKeys={["1"]} aria-label={"REPORTE DE PERSONAL, REPORTE DE ACTIVIDADES, REPORTE DE INFERENCIAS"}>
          <AccordionItem key="1" aria-label="REPORTE DE PERSONAL" title="REPORTE DE PERSONAL"
                         className="w-full px-4 py-4 text-2xl font-bold"
          >
            <div className="flex flex-row">
              <HoursTable
                personalDateInput={personalDateInput}
                setPersonalDateInput={setPersonalDateInput}
                hours={hours}
              />
              <PersonalTable
                personalUsersInput={personalUsersInput}
                setPersonalUsersInput={setPersonalUsersInput}
                users={users}
              />
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="REPORTE DE ACTIVIDADES" title="REPORTE DE ACTIVIDADES"
                         className="w-full px-4 py-4 text-2xl font-bold"
          >
            <ActivityTable activities={activities} handleActivityChange={handleActivityChange}/>
          </AccordionItem>
          <AccordionItem key="3" aria-label="REPORTE DE INFERENCIAS" title="REPORTE DE INFERENCIAS"
                         className="w-full px-4 py-4  text-2xl font-bold"
          >
            <InferenceTable inferences={inferences} hours={hours} inferencesInput={inferencesInput} setInferencesInput={setInferencesInput}/>
          </AccordionItem>
          <AccordionItem key="4" aria-label="REPORTE DE FOTOGRAFIAS" title="REPORTE DE FOTOGRAFIAS Y ARCHIVOS" className="w-full px-4 py-4  text-2xl font-bold">
            <Input type={'file'} className="w-full px-4 py-4" variant="bordered" multiple={true} placeholder={'Subir archivos'}/>
          </AccordionItem>
        </Accordion>
        <Button color="primary" className="mt-4disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSave}
        >Guardar</Button>
      </div>
  );
};
