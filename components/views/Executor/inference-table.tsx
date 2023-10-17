'use client';
import React from 'react';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Hour, Inference} from "@/config/interfaces";
import {Button} from "@nextui-org/button";
import {TiDelete} from "react-icons/ti";
import {IoIosAddCircle} from "react-icons/io";
import {InferenceInput} from "@/config/interfaces/input-interfaces";
import {Select, SelectItem} from "@nextui-org/select";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Textarea} from "@nextui-org/input";


const columns = [
    {
        key: "hour",
        label: "HORA",
        className: "w-1/6 px-0",
    },
    {
        key: "inference",
        label: "INFERENCIA",
        className: "w-2/6",
    },
    {
        key: "description",
        label: "DESCRIPCIÓN DE LA INFERENCIA",
        className: "w-3/6 pr-0",
    },
    {
        key: "type",
        label: "TIPO",
        className: "w-3/6",
    }
]
interface Props {
    inferences: Inference[]
    inferencesInput: InferenceInput[]
    setInferencesInput: React.Dispatch<React.SetStateAction<InferenceInput[]>>
    hours: Hour[]
}

export const InferenceTable: React.FC<Props> = ({inferences, inferencesInput, setInferencesInput, hours}) => {
    const addInferenceRow = () => {
        const newInferencesInput = [...inferencesInput, {
            hour: hours[0],
            inference: inferences[0],
            description: "",
        }]
        setInferencesInput(newInferencesInput)
    }

    const deleteLastInference = () => {
        if (inferencesInput.length === 0) return
        const newInferencesInput = [...inferencesInput]
        newInferencesInput.pop()
        setInferencesInput(newInferencesInput)
    }

    const updateHourInferenceInput = (hourId: string, index: number) => {
        if (hourId === "") return
        const newInferencesInput = inferencesInput.map((inferenceInput, i) => {
            if (i === index) {
                return {...inferenceInput, hour: hours.find((hour) => hour.id.toString() === hourId)!}
            }
            return inferenceInput
        }
        )
        setInferencesInput(newInferencesInput)
    }

    const updateInferenceInferenceInput = (inferenceId: string, index: number) => {
        if (inferenceId === "") return
        const newInferencesInput = inferencesInput.map((inferenceInput, i) => {
            if (i === index) {
                return {...inferenceInput, inference: inferences.find((inference) => inference.id === inferenceId)!}
            }
            return inferenceInput
        }
        )
        setInferencesInput(newInferencesInput)
    }

    const updateDescriptionInferenceInput = (description: string, index: number) => {
        const newInferencesInput = inferencesInput.map((inferenceInput, i) => {
            if (i === index) {
                return {...inferenceInput, description: description}
            }
            return inferenceInput
        }
        )
        setInferencesInput(newInferencesInput)
    }

    return (
      <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4"
             classNames={{
                 base: "max-h-[520px]",
             }}
             bottomContent={<div className="flex flex-row w-full justify-end">
                 <div className="flex flex-row gap-2 justify-end">
                     <Button size="sm" color="danger"
                             isDisabled={inferencesInput.length === 0}
                              onClick={() => {
                                  deleteLastInference();
                              }}
                     >
                         <TiDelete size={25}/>
                         ELIMINAR
                     </Button>
                     <Button size="sm" color="primary"
                             onClick={() => {
                                 addInferenceRow();
                             }}
                     >
                         <IoIosAddCircle size={25}/>
                         AGREGAR
                     </Button>
                 </div>
             </div>}
             >
          <TableHeader className="w-full" columns={columns}>
              {
                  ((columns) => <TableColumn key={columns.key} className={columns.className}>
                      <p className="text-center">
                          {columns.label}
                      </p>
                  </TableColumn>)
              }
          </TableHeader>
          <TableBody emptyContent={"No hay inferencias"} items={inferencesInput!.map((value, index) => {
              return {...value, id: index}
          })}>
              {
                  ((item) => (
                    <TableRow key={item.id} className="w-full">
                        <TableCell  align="center" className="w-1/6 px-0">
                            <Select
                              size="sm"
                              className="w-full"
                              placeholder="Hora"
                              // value={item.hour.id ? item.hour.id : hours[0].id}
                              selectedKeys={[item.hour.id.toString()]}
                              onChange={
                                  (e) => {
                                      updateHourInferenceInput(e.target.value, item.id)
                                  }
                              }
                            >
                                {hours.map((hour) => (
                                  <SelectItem key={hour.id} value={hour.id}>{hour.hour}</SelectItem>
                                ))}
                            </Select>
                        </TableCell>
                        <TableCell align="center" className="w-2/6">
                            <Select
                              size="sm"
                              className="w-full"
                              placeholder="Inferencia"
                              value={item.inference.id}
                              selectedKeys={[item.inference.id.toString()]}
                              onChange={
                                  (e) => {
                                      updateInferenceInferenceInput(e.target.value, item.id)
                                  }
                              }
                            >
                                {
                                    inferences.map((inference) => (
                                      <SelectItem key={inference.id} value={inference.id}>{inference.name}</SelectItem>
                                    ))
                                }
                            </Select>
                        </TableCell>
                        <TableCell  align="center" className="w-3/6 pr-0">
                            <Popover placement="right" showArrow offset={10}>
                                <PopoverTrigger>
                                    <Button size="lg"
                                            radius="sm"
                                            className="w-full text-left">{item.description ? item.description : "Ingresa una Descripción"}</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-96">
                                    {
                                        () => (
                                          <div className="px-1 py-2 w-full h-full">
                                              <p className="text-small font-bold text-foreground">
                                                  Descripción
                                              </p>
                                              <div className="w-full h-full">
                                                  <Textarea
                                                    minRows={20}
                                                    value={item.description}
                                                    onChange={(e) => {
                                                        updateDescriptionInferenceInput(e.target.value, item.id);
                                                    }}
                                                    placeholder="Descripción"
                                                  />
                                              </div>
                                          </div>
                                        )
                                    }
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                        <TableCell align="center" className="w-3/6">
                            <p className="text-center">{item.inference.inferenceType.name}</p>
                        </TableCell>
                    </TableRow>
                  ))
              }
          </TableBody>
      </Table>
    );
};
