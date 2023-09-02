import React from 'react';
import { Image } from "@nextui-org/image";
import { Link } from '@nextui-org/link';
import { APP_ICON_IMAGE } from '@/constants';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
interface Props {

}

export const Sidebar: React.FC<Props> = ({ }) => {
    return (
        <div className='w-64 h-screen border-r-1 border-gray-300'>
            <Image src={APP_ICON_IMAGE} width={200} height={200}
                className='mx-auto p-4' alt='ProIngenieria' />
            <div className='flex flex-col p-2'>
                <Button href='/ejecutor/formularios'
                    as={Link}
                    className='border' showAnchorIcon radius='none' variant="light">
                    <FaWpforms className='inline-block'
                    />
                    Mis Formularios
                </Button>
                <Button href='/users'
                    as={Link}
                    className='border' showAnchorIcon radius='none' variant="light">
                    <FaUserAlt className='inline-block' />
                    Usuarios
                </Button>
                <Button href='/settings'
                    as={Link}
                    className='border' showAnchorIcon radius='none' variant="light">
                    <AiFillSetting className='inline-block' />
                    Settings
                </Button>

            </div>
        </div>
    );
};
