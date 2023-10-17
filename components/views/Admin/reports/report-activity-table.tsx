'use client';
import React from 'react';
import {ActivityReport} from "@/config/interfaces";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";


const columns = [
  {
    key: 'hour',
    label: 'Hora',
  },
  {
    key: 'activity',
    label: 'Actividad',
  }
]

interface Props {
  activities: ActivityReport[];
}

export const ReportActivityTable: React.FC<Props> = ({activities}) => {
    return (
        <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4">
            <TableHeader columns={columns}>
                {
                    ((columns) => <TableColumn key={columns.key} align="center">
                        <p className="text-center">{columns.label.toUpperCase()}
                        </p></TableColumn>)
                }
            </TableHeader>
          <TableBody items={activities.map((value, index) => {
            return {...value, id: index}
          })} emptyContent={"No hay actividades"}>
            {
                ((item) => (
                  <TableRow key={item.id} className="w-96">
                    <TableCell  align="center" className="w-1/6 px-0">
                      <p className="text-center">{item.hour.hour}</p>
                    </TableCell>
                    <TableCell  align="center" className="w-5/6 pr-0">
                      <p className="text-center">{item.name}</p>
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
    );
};
