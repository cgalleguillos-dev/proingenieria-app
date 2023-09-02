'use client';
import React from 'react';
import {Link} from '@nextui-org/link';
import {FORMS} from '@/constants';
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/table";

interface Props {

}

export const ExecutorView: React.FC<Props> = ({}) => {
    return (

        <Table aria-label='Table' className='px-4 py-4'>
            <TableHeader>
                <TableColumn align='center'>DESCRIPCIÓN</TableColumn>
                <TableColumn align='center'>FECHA</TableColumn>
                <TableColumn align='center'>REALIZADO</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    FORMS.map((FORMS, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align='center'>
                                    <Link href={`/ejecutor/formularios/${FORMS.id}`}>
                                        <p className='inline-block ml-2 font-semibold'>{FORMS.name}</p>
                                    </Link>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{
                                        FORMS.dateOfExpiry ?
                                            new Date(FORMS.dateOfExpiry).toLocaleDateString('es-ES') : 'No tiene fecha de expiración'
                                    }</p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{FORMS.done ?
                                        'Realizado' : 'No realizado'
                                    }</p>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
};
