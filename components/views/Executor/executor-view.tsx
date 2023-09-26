'use client';
import React from 'react';
import {Link} from '@nextui-org/link';
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell} from "@nextui-org/table";
import NextLink from "next/link";
import {DailyReport} from "@/config/interfaces";

interface Props {
  dailyReports: DailyReport[]
}

const columns = [
  {
    title: 'DESCRIPCIÓN',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (text: string) => <p className='inline-block ml-2 font-semibold'>{text}</p>
  },
  {
    title: 'FECHA',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
    render: (text: string) => <p className='inline-block ml-2 font-semibold'>{new Date(text).toLocaleDateString()}</p>
  },
  {
    title: 'REALIZADO',
    dataIndex: 'isComplete',
    key: 'isComplete',
    align: 'center',
    render: (text: boolean) => <p className='inline-block ml-2 font-semibold'>{text ? 'Realizado' : 'No realizado'}</p>
  }
]
export const ExecutorView: React.FC<Props> = ({dailyReports}) => {
    return (
        <Table aria-label='Table' className='px-4 py-4'>
            <TableHeader aria-label={'header'} columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>
                  {column.title}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody aria-label={'body'} items={dailyReports}>
                {
                  dailyReports.map((dp, index) => {
                        return (
                            <TableRow key={index} aria-label={'row'}>
                                <TableCell align='center'>
                                    <Link href={`/ejecutor/formularios/${dp.id}`} as={NextLink}>
                                        <p className='inline-block ml-2 font-semibold'>{dp.name}</p>
                                    </Link>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{
                                        new Date(dp.date).toLocaleDateString()
                                    }</p>
                                </TableCell>
                                <TableCell align='center'>
                                    <p className='inline-block ml-2 font-semibold'>{dp.isComplete ?
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
