'use client';
import React, {useState} from 'react';
import {hoursBetween} from "@/utils";
import {PersonalFormDateInput} from "@/config/interfaces";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Select, SelectItem} from "@nextui-org/select";
import {timeOptionsAM, timeOptionsPM} from "@/constants";


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
}

export const HoursTable: React.FC<Props> = ({personalDateInput, setPersonalDateInput}) => {
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
                         {hoursBetween(personalDateInput.initDateAM, personalDateInput.endDateAM)}
                       </p>}
                 </div>
                 <div className="w-1/2 h-full">
                   {personalDateInput.initDatePM && personalDateInput.endDatePM &&
                       <p className="text-center text-sm  font-normal">
                         {hoursBetween(personalDateInput.initDatePM, personalDateInput.endDatePM)}
                       </p>}
                 </div>
               </div>
             </div>}
      >
        <TableHeader columns={columns} aria-label={'Header'}>
          {
            ((columns) => <TableColumn key={columns.key}>{columns.label}</TableColumn>)
          }
        </TableHeader>
        <TableBody emptyContent={"No hay personal"}>
          <TableRow key="1" className="">
            <TableCell className="w-1/6 px-0">
              <p className="text-center">Hora Inicio de Buceo</p>
            </TableCell>
            <TableCell className="w-1/4 pr-0">
              <Select
                size="sm"
                variant="bordered"
                className="w-full"
                placeholder="Hora"
                onChange={(e) => setPersonalDateInput({...personalDateInput, initDateAM: e.target.value})}
                value={personalDateInput.initDateAM}
              >
                {timeOptionsAM.map((time, index) => (
                  <SelectItem key={time} textValue={time}>{time}</SelectItem>))}
              </Select>
            </TableCell>
            <TableCell className="w-1/4 pr-0">
              <Select
                size="sm"
                variant="bordered"
                className="w-full"
                placeholder="Hora"
                onChange={(e) => setPersonalDateInput({...personalDateInput, initDatePM: e.target.value})}
              >
                {timeOptionsPM.map((time, index) => (<SelectItem key={time} value={time}>{time}</SelectItem>))}
              </Select>
            </TableCell>
          </TableRow>
          <TableRow key="2" className="">
            <TableCell className="w-1/6 px-0">
              <p className="text-center">Hora Termino de Buceo</p>
            </TableCell>
            <TableCell className="w-1/4 pr-0">
              <Select
                size="sm"
                variant="bordered"
                className="w-full"
                placeholder="Hora"
                onChange={(e) => setPersonalDateInput({...personalDateInput, endDateAM: e.target.value})}
              >
                {timeOptionsAM.map((time, index) => (<SelectItem key={time} value={time}>{time}</SelectItem>

                ))}
              </Select>
            </TableCell>
            <TableCell className="w-1/4 pr-0">
              <Select
                size="sm"
                variant="bordered"
                className="w-full"
                placeholder="Hora"
                onChange={(e) => setPersonalDateInput({...personalDateInput, endDatePM: e.target.value})}
                value={personalDateInput.endDatePM}
              >
                {timeOptionsPM.map((time, index) => (<SelectItem key={time} value={time}>{time}</SelectItem>))}
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
};
