import React from 'react';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {getUsersByJob, PersonalOptions} from "@/constants";
import {Select, SelectItem} from "@nextui-org/select";
import {Chip} from "@nextui-org/chip";
import {Job, User} from "@/config/interfaces";

interface Props {
  personalUsersInput: string[];
  setPersonalUsersInput: React.Dispatch<React.SetStateAction<string[]>>;
  users: User[];
  jobs?: Job[];
}

export const PersonalTable: React.FC<Props> = ({personalUsersInput, setPersonalUsersInput, users, jobs}) => {

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonalUsersInput([...e.target.value.split(',')]);
  }
  return (
    <Table isHeaderSticky isCompact isVirtualized aria-label="REPORTE DE PERSONAL" className="px-4 py-4">
      <TableHeader>
        <TableColumn align="center">
          <p className="text-center">
            PERSONAL
          </p>
        </TableColumn>
      </TableHeader>
      <TableBody items={PersonalOptions}
        emptyContent={"No hay personal"}>
        {PersonalOptions.map((personal, index) => (<TableRow key={index} className="">
          <TableCell className="w-1/6 px-0">
            <div className="flex flex-row items-center justify-between">
              <p className="text-left w-1/2">{personal.personal}</p>
              <Select
                items={getUsersByJob(personal.job, users).map((user, index) => ({
                  key: user.id,
                  data: {name: user.name}
                }))}
                size="sm"
                variant="bordered"
                isMultiline={true}
                selectionMode="multiple"
                className="w-full"
                placeholder="Personal"
                defaultSelectedKeys={personalUsersInput}
                selectedKeys={personalUsersInput}
                onChange={handleSelectChange}
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
