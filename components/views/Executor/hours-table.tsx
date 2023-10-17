'use client';
import React from 'react';
import {hoursBetween} from "@/utils";
import {Hour} from "@/config/interfaces";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {PersonalFormDateInput} from "@/config/interfaces/input-interfaces";
import {ExecutorSelect} from "@/components/views/Executor/executor-select";


const columns = [
  {
    key: 'detail',
    label: 'Detalle',
  },
  {
    key: 'initDateAM',
    label: 'Fecha Inicio AM',
  },
  {
    key: 'initDatePM',
    label: 'Fecha Inicio PM',
  }
]
interface Props {
  personalDateInput: PersonalFormDateInput;
  setPersonalDateInput: React.Dispatch<React.SetStateAction<PersonalFormDateInput>>;
  hours: Hour[];
}

export const HoursTable: React.FC<Props> = ({personalDateInput, setPersonalDateInput, hours}) => {
  const amOptions = hours.slice(0, 12)
  const pmOptions = hours.slice(12, 20)
  return (
    <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE PERSONAL" className="px-4 py-4"
           bottomContent={<div className="flex flex-row  w-full">
             <div className="text-center text-sm  px-0  h-full font-normal w-1/3">
               <p> Horas efectivas de Buceo</p>
             </div>
             <div className="flex flex-row h-full w-full ">
               <div className="w-1/2 h-full">
                 {personalDateInput.initDateAM && personalDateInput.endDateAM &&
                     <p className="text-center text-sm  items-center justify-center font-normal">
                       {hoursBetween(
                         amOptions.find((hour) => hour.id.toString() === personalDateInput.initDateAM)?.hour!,
                          amOptions.find((hour) => hour.id.toString() === personalDateInput.endDateAM)?.hour!
                        )
                       }
                     </p>}
               </div>
               <div className="w-1/2 h-full">
                 {personalDateInput.initDatePM && personalDateInput.endDatePM &&
                     <p className="text-center text-sm  font-normal">
                       {hoursBetween(
                          pmOptions.find((hour) => hour.id.toString() === personalDateInput.initDatePM)?.hour!,
                          pmOptions.find((hour) => hour.id.toString() === personalDateInput.endDatePM)?.hour!
                       )}
                     </p>}
               </div>
             </div>
           </div>}
    >
      <TableHeader columns={columns} aria-label={'Header'}>
        {
          ((columns) => <TableColumn key={columns.key}>
            <p className="text-center">
              {columns.label.toUpperCase()}
            </p>
            </TableColumn>)
        }
      </TableHeader>
      <TableBody>
        <TableRow key="1" className="">
          <TableCell className="w-1/6 px-0">
            <p className="text-center">Hora Inicio de Buceo</p>
          </TableCell>
          <TableCell className="w-1/4 pr-0">
            <ExecutorSelect optionsHour={amOptions} defaultSelectedKey={personalDateInput.initDateAM?.toString()}
                            selectedKey={personalDateInput.initDateAM?.toString()} value={personalDateInput.initDateAM}
                            onChange={(e) => setPersonalDateInput({...personalDateInput, initDateAM: e.target.value})}
            />
          </TableCell>
          <TableCell className="w-1/4 pr-0">
            <ExecutorSelect optionsHour={pmOptions} defaultSelectedKey={personalDateInput.initDatePM?.toString()}
                            selectedKey={personalDateInput.initDatePM?.toString()} value={personalDateInput.initDatePM}
                            onChange={(e) => setPersonalDateInput({...personalDateInput, initDatePM: e.target.value})}
            />
          </TableCell>
        </TableRow>
        <TableRow key="2" className="">
          <TableCell className="w-1/6 px-0">
            <p className="text-center">Hora Termino de Buceo</p>
          </TableCell>
          <TableCell className="w-1/4 pr-0">
            <ExecutorSelect optionsHour={amOptions} defaultSelectedKey={personalDateInput.endDateAM?.toString()}
                            selectedKey={personalDateInput.endDateAM?.toString()} value={personalDateInput.endDateAM}
                            onChange={(e) => setPersonalDateInput({...personalDateInput, endDateAM: e.target.value})}
            />
          </TableCell>
          <TableCell className="w-1/4 pr-0">
            <ExecutorSelect optionsHour={pmOptions} defaultSelectedKey={personalDateInput.endDatePM?.toString()}
                            selectedKey={personalDateInput.endDatePM?.toString()} value={personalDateInput.endDatePM}
                            onChange={(e) => setPersonalDateInput({...personalDateInput, endDatePM: e.target.value})}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
