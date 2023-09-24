import React from 'react';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {getUsersByJob, PersonalOptions} from "@/constants";
import {Select, SelectItem} from "@nextui-org/select";
import {Chip} from "@nextui-org/chip";
import {User} from "@/config/interfaces";

interface Props {
}

export const PersonalTable: React.FC<Props> = ({}) => {
  const [personalUsers, setPersonalUsers] = React.useState<User[]>([]);

    return (
      <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE PERSONAL" className="px-4 py-4"
             bottomContent={<div className="flex flex-row">
               <div className="text-left text-sm  px-0  h-full font-normal w-1/4">
                 <p>Dotación Total</p>
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

                  // onChange={(e) => setPersonalDateInput({...personalDateInput, initDateAM: e.target.value})}
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
    );
};
