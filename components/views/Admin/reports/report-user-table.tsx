'use client';
import React from 'react';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import {User} from "@/config/interfaces";

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'RUT',
        dataIndex: 'rut',
        key: 'rut'
    },
    {
        title: 'Correo electrónico',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Rol',
        dataIndex: 'role',
        key: 'role'
    },
    {
        title: 'Puesto',
        dataIndex: 'position',
        key: 'position'
    }
];

interface Props {
    users: User[];
}
export const ReportUserTable: React.FC<Props> = ({users}) => {
    return (
        <Table aria-label={'Personal Users'} className="px-4 py-4">
            <TableHeader columns={columns} className="px-4 py-4">
                {
                    ((column) => (
                        <TableColumn key={column.key}>{column.title}</TableColumn>
                    ))
                }
            </TableHeader>
            <TableBody items={
                users.map((user) => {
                    return {
                        id: user.id,
                        name: user.name,
                        rut: user.rut,
                        email: user.email,
                        role: user.role?.name,
                        job: user.job?.name
                    }
                })
            }>
                {
                    ((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.rut}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.role}</TableCell>
                            <TableCell>{item.job}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
};
