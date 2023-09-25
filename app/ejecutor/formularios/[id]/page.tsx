'use client';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Button} from "@nextui-org/button";
import {useState} from 'react';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Textarea} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import {
  FormActivity, generateTimeOptions, getUsersByJob, INFERENCES, PersonalOptions, timeOptionsAM, timeOptionsPM
} from "@/constants";
import {IoIosAddCircle} from 'react-icons/io';
import {TiDelete} from 'react-icons/ti';
import {Activity, InferenceFormInput, PersonalFormDateInput} from "@/config/interfaces";
import {Chip} from "@nextui-org/chip";
import {hoursBetween} from "@/utils";
import {HoursTable} from "@/components/common/hours-table";
import {PersonalTable} from "@/components/common/personal-table";


const Page = ({params: {id}}: { params: { id: string } }) => {
  const [activities, setActivities] = useState<Activity[]>(FormActivity);

  const [inferences, setInferences] = useState<InferenceFormInput[]>([]);
  const [newInference, setNewInference] = useState<InferenceFormInput>({
    hour: "", idInference: "", description: "",
  });

  const [personalDateInput, setPersonalDateInput] = useState<PersonalFormDateInput>({
    initDateAM: "", initDatePM: "", endDateAM: "", endDatePM: "",
  });

  const timeOptions = generateTimeOptions();


  const addInferenceRow = () => {
    const newInferences = [...inferences];
    newInferences.push({...newInference});
    setInferences(newInferences);
  };

  const updateInferenceField = (index: number, field: string, value: string) => {
    const newInferences = [...inferences];
    newInferences[index][field as keyof InferenceFormInput] = value;
    setInferences(newInferences);
  };


  const deleteLastInference = () => {
    const newInferences = [...inferences];
    newInferences.pop();
    setInferences(newInferences);
  };


  return (<div className="flex flex-col items-center justify-center">
      <Accordion defaultExpandedKeys={["1"]} aria-label={"REPORTE DE PERSONAL, REPORTE DE ACTIVIDADES, REPORTE DE INFERENCIAS"}>
        <AccordionItem key="1" aria-label="REPORTE DE PERSONAL" title="REPORTE DE PERSONAL"
                       className="w-full px-4 py-4 text-2xl font-bold"
        >
          <div className="flex flex-row">
            <HoursTable
              personalDateInput={personalDateInput}
              setPersonalDateInput={setPersonalDateInput}
            />
            <PersonalTable />
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="REPORTE DE ACTIVIDADES" title="REPORTE DE ACTIVIDADES"
                       className="w-full px-4 py-4 text-2xl font-bold"
        >
          <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4"
                 classNames={{
                   base: "max-h-[520px]", table: "min-h-[400px]",
                 }}>
            <TableHeader>
              <TableColumn align="center">
                <p className="text-center">HORA</p>
              </TableColumn>
              <TableColumn align="center">
                <p className="text-center">
                  DESCRIPCIÓN DE ACTIVIDADES
                </p>
              </TableColumn>
            </TableHeader>
            <TableBody items={activities} emptyContent={"No hay actividades"}>
              {activities.map((activity, index) => (<TableRow key={index} className="w-96">
                  <TableCell align="center" className="w-1/6 px-0">
                    <p className="text-center">{activity.time}</p>
                  </TableCell>
                  <TableCell align="center" className="w-5/6 pr-0">
                    <Popover placement="right" showArrow offset={10}>
                      <PopoverTrigger>
                        <Button size="lg"
                                radius="sm"
                                className="w-full text-left">{activity.description ? activity.description : "Ingresa una Descripción"}</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-96">
                        {(titleProps) => (<div className="px-1 py-2 w-full h-full">
                            <div className="w-full h-full">
                              <Textarea
                                minRows={20}
                                label="Descripción"
                                fullWidth
                                value={activity.description}
                                onChange={(e) => setActivities([...activities.slice(0, index), {
                                  ...activity, description: e.target.value
                                }, ...activities.slice(index + 1)])}
                                placeholder="Ingresa una descripción"
                              />
                            </div>
                          </div>)}
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>))}

            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem key="3" aria-label="REPORTE DE INFERENCIAS" title="REPORTE DE INFERENCIAS"
                       className="w-full px-4 py-4  text-2xl font-bold"
        >
          <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE ACTIVIDADES" className="px-4 py-4"
                 classNames={{
                   base: "max-h-[520px]",

                 }}
                 bottomContent={<div className="flex flex-row w-full justify-end">
                   <div className="flex flex-row gap-2 justify-end">
                     <Button size="sm" color="danger"
                             isDisabled={inferences.length === 0}
                             onClick={() => {
                               deleteLastInference();
                             }}>
                       <TiDelete size={25}/>
                       ELIMINAR
                     </Button>
                     <Button size="sm" color="primary"
                             onClick={() => {
                               addInferenceRow();
                             }}>
                       <IoIosAddCircle size={25}/>
                       AGREGAR
                     </Button>
                   </div>
                 </div>}
          >
            <TableHeader className="w-full">
              <TableColumn align="center" className="w-1/6 px-0">
                <p className="text-center">
                  HORA
                </p>
              </TableColumn>
              <TableColumn align="center" className="w-2/6">
                <p className="text-center">
                  TIPO DE INFERENCIA
                </p>
              </TableColumn>
              <TableColumn align="center" className="w-3/6 pr-0">
                <p className="text-center">
                  DESCRIPCIÓN DE INFERENCIA
                </p>
              </TableColumn>
              <TableColumn align="center" className="w-3/6">
                <p className="text-center">
                  TIPO
                </p>
              </TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay inferencias"}>
              {inferences.map((inference, index) => (<TableRow key={index} className="w-full">
                  <TableCell className="w-1/6 px-0">
                    <Select
                      size="sm"
                      className="w-full"
                      placeholder="Hora"
                      value={inference.hour}
                      onChange={(e) => updateInferenceField(index, "hour", e.target.value)}
                    >
                      {timeOptions.map((time, index) => (<SelectItem key={time} value={index}>{time}</SelectItem>))}
                    </Select>
                  </TableCell>

                  <TableCell className="w-2/6">
                    <Select
                      size="sm"
                      className="w-full"
                      placeholder="Inferencia"
                      value={inference.idInference}
                      onChange={(e) => updateInferenceField(index, "idInference", e.target.value)}
                    >
                      {INFERENCES.map((inference, index) => (<SelectItem key={index} value={inference.id}>
                          {inference.description}
                        </SelectItem>))}
                    </Select>
                  </TableCell>
                  <TableCell className="w-3/6 pr-0">
                    <Popover placement="right" showArrow offset={10}>
                      <PopoverTrigger>
                        <Button size="lg"
                                radius="sm"
                                className="w-full text-left">{inference.description ? inference.description : "Ingresa una Descripción"}</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-96">
                        {(titleProps) => (<div className="px-1 py-2 w-full h-full">
                            <p className="text-small font-bold text-foreground" {...titleProps}>
                              Descripción
                            </p>
                            <div className="w-full h-full">
                              <Textarea
                                minRows={20}
                                value={inference.description}
                                onChange={(e) => updateInferenceField(index, "description", e.target.value)}
                                placeholder="Descripción"
                              />
                            </div>
                          </div>)}
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                  <TableCell className="w-3/6">
                    <p className="text-center">
                      {
                        INFERENCES.find((inf) => inf.id - 1 === parseInt(inference.idInference)) ? INFERENCES.find((inf) => inf.id - 1 === parseInt(inference.idInference))?.type : "Selecciona"
                      }
                    </p>
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>

        </AccordionItem>
      </Accordion>
    </div>)
}
export default Page