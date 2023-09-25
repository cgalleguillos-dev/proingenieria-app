'use client';
import React from 'react';
import {DailyReport} from "@/config/interfaces";
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/table";

interface Props {
    dailyReports: DailyReport[];
}

export const AdminReportsView: React.FC<Props> = ({dailyReports}) => {
    return <>
        <Table aria-label={'Table'} className='px-4 py-4'>
            <TableHeader aria-label={'header'}>
                <TableColumn align='center'>DESCRIPCIÓN</TableColumn>
                <TableColumn align='center'>FECHA</TableColumn>
                <TableColumn align='center'>ESTADO</TableColumn>
            </TableHeader>
            <TableBody aria-label={'body'}>
                {
                    dailyReports.map((dailyReport, index) => {
                        return (
                            <TableRow key={index} aria-label={'row'}>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{dailyReport.name}</p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{new Date(dailyReport.date).toLocaleDateString('es-ES')}</p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{dailyReport.isComplete ? 'Realizado' : 'No realizado'}</p>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </>
};
