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

  const hoursBetween = (initDate: string, endDate: string) => {
    const initDateSplit = initDate.split(":");
    const endDateSplit = endDate.split(":");
    const initDateHour = parseInt(initDateSplit[0]);
    const initDateMinutes = parseInt(initDateSplit[1]);
    const endDateHour = parseInt(endDateSplit[0]);
    const endDateMinutes = parseInt(endDateSplit[1]);
    const hours = endDateHour - initDateHour;
    const minutes = endDateMinutes - initDateMinutes;
    return hours + minutes / 60;
  };


  return (<div className="flex flex-col items-center justify-center">
      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem key="1" aria-label="REPORTE DE PERSONAL" title="REPORTE DE PERSONAL"
                       className="w-full px-4 py-4 text-2xl font-bold"
        >
          <div className="
                    flex flex-row">
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
              <TableHeader>
                <TableColumn align="center">
                  <p className="text-center">Detalle</p>
                </TableColumn>
                <TableColumn align="center">
                  <p className="text-center">AM</p>
                </TableColumn>
                <TableColumn align="center">
                  <p className="text-center">PM</p>
                </TableColumn>
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

            <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE PERSONAL" className="px-4 py-4"
                   bottomContent={<div className="flex flex-row">
                     <div className="text-left text-sm  px-0  h-full font-normal w-1/4">
                       <p> Dotación Total</p>
                     </div>
                   </div>}
            >
              <TableHeader>
                <TableColumn align="center">
                  <p className="text-center">
                    PERSONAL
                  </p>
                </TableColumn>
              </TableHeader>
              <TableBody items={PersonalOptions} emptyContent={"No hay personal"}>
                {PersonalOptions.map((personal, index) => (<TableRow key={index} className="">
                    <TableCell className="w-1/6 px-0">
                      <div className="flex flex-row items-center justify-between">
                        <p className="text-left w-1/2">{personal.personal}</p>
                        <Select
                          items={getUsersByJob(personal.role).map((user, index) => ({
                              key: user.id,
                              data: {name: user.name}
                            }))}
                          size="sm"
                          variant="bordered"
                          isMultiline={true}
                          selectionMode="multiple"
                          className="w-full"
                          placeholder="Personal"
                          onChange={(e) => setPersonalDateInput({...personalDateInput, initDateAM: e.target.value})}
                          // value={personalDateInput.initDateAM}
                          renderValue={(items) => {
                            return (<div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                  <Chip color="primary" variant="dot" key={item.key}>{item.data?.data.name}</Chip>))}
                              </div>);
                          }}
                        >
                          {(user) => (<SelectItem key={user.key} value={user.key}>{user.data.name}</SelectItem>)}
                        </Select>

                      </div>

                    </TableCell>
                  </TableRow>))}
              </TableBody>
            </Table>
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
                      {//find inference in INFERENCE array by id and show type
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