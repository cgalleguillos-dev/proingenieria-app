import React from 'react';
import { Image } from "@nextui-org/image";
import { APP_ICON_IMAGE } from '@/constants';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import {SidebarItem} from "@/components/sidebar/sidebar-item";

interface SidebarElement {
    href: string;
    detail: string;
    icon?: React.ReactNode;
}
const sidebarElements: SidebarElement[] = [
    {
        href: '/ejecutor/formularios',
        detail: 'Formularios',
        icon: <FaWpforms className='inline-block'/>
    },
    {
        href: '/user',
        detail: 'Usuarios',
        icon: <FaUserAlt className='inline-block' />
    },
    {
        href: '/settings',
        detail: 'Settings',
        icon: <AiFillSetting className='inline-block' />
    }
]
interface Props {

}

export const Sidebar: React.FC<Props> = ({ }) => {
    return (
        <div className='w-64 h-screen border-r-1 border-zinc-300 dark:border-zinc-800 dark:text-gray-200'>
            <Image src={APP_ICON_IMAGE} width={200} height={200}
                className='mx-auto p-4' alt='ProIngenieria' />
            <div className='flex flex-col p-2'>
                {
                    sidebarElements.map((element, index) => {
                        return  <SidebarItem href={element.href} detail={element.detail} icon={element.icon} key={index} />
                    })
                }
            </div>
        </div>
    );
};
