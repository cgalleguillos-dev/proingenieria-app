'use client';
import React from 'react';
import {InferenceReport} from "@/config/interfaces";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";


const columns = [
  {
    key: 'hour',
    label: 'Hora',
  },
  {
    key: 'inference',
    label: 'Inferencia'
  },
  {
    key: 'causal',
    label: 'Causal',
  }
]
interface Props {
  inferences: InferenceReport[];
}

export const ReportInferenceTable: React.FC<Props> = ({inferences}) => {
    return (
        <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4">
            <TableHeader columns={columns}>
              {
                ((columns) => <TableColumn key={columns.key} align="center">
                  <p className="text-center">{columns.label.toUpperCase()}
                  </p></TableColumn>)
              }
            </TableHeader>
          <TableBody items={inferences.map((value, index) => {
            return {...value, id: index}
          })} emptyContent={"No hay inferencias"}>
            {
                ((item) => (
                  <TableRow key={item.id} className="w-96">
                    <TableCell  align="center" className="w-1/6 px-0">
                      <p className="text-center">{item.hour.hour}</p>
                    </TableCell>
                    <TableCell  align="center" className="w-1/6 pr-0">
                      <p className="text-center">{item.inference.name}</p>
                    </TableCell>
                    <TableCell  align="center" className="w-1/6 pr-0">
                      <p className="text-center">{item.name}</p>
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>

        </Table>
    );
};
