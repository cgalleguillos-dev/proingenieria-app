'use client';
import React from 'react';
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import { users} from "@/constants";
import {User} from "@/config/interfaces";

const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'rut',
    label: 'RUT',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'job',
    label: 'Job',
  },
  {
    key: 'role',
    label: 'Role',
  }
]

interface Props {
  users: User[];
}

export const AdminUsersView: React.FC<Props> = ({users}) => {
    const rows = users.map((user) => ({
      id: user.id,
      name: user.name,
      rut: user.rut,
      email: user.email,
      job: user.job.name,
      role: user.role?.name || 'Sin rol definido',
    }));

    return (
        <div className='px-4 py-4 flex flex-col'>
          <Table aria-label="Example static collection table">
            <TableHeader columns={columns}>
              {
                (columns) => <TableColumn key={columns.key}>{columns.label}</TableColumn>
              }
            </TableHeader>
            <TableBody items={rows}>
              {
                (item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.rut}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.job}</TableCell>
                    <TableCell>{item.role || 'Sin rol definido'}</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </div>
    );
};
