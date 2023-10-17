'use client';
import React from 'react';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {ActivityInput} from "@/config/interfaces/input-interfaces";
import {Button} from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Textarea} from "@nextui-org/input";


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
    activities: ActivityInput[];
    handleActivityChange: (idHour: number, value: string) => void;
}

export const ActivityTable: React.FC<Props> = ({activities, handleActivityChange}) => {
    return (
      <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4"
             classNames={{
                 base: "max-h-[520px]", table: "min-h-[400px]",
             }}>
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
                      <p className="text-center">{item.hour}</p>
                    </TableCell>
                    <TableCell  align="center" className="w-5/6 pr-0">
                      <Popover placement="right" showArrow offset={10}>
                        <PopoverTrigger>
                          <Button size="lg"
                                  radius="sm"
                                  className="w-full text-left">{item.name ? item.name : "Ingresa una Descripción"}</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96">
                          {
                            (() => (
                              <div className="px-1 py-2 w-full h-full">
                                <div className="w-full h-full">
                                  <Textarea
                                    minRows={20}
                                    label="Descripción"
                                    fullWidth
                                    value={item.name}
                                    placeholder="Ingresa una descripción"
                                    onChange={(e) => {
                                        handleActivityChange(item.idHour, e.target.value);
                                    }}
                                  >
                                    {item.name}
                                  </Textarea>
                                </div>
                              </div>
                            ))
                          }
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
      </Table>
    );
};
