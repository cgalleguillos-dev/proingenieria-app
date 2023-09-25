'use client';
import React from 'react';
import {FaUserAlt, FaWpforms} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";
import {SidebarItem} from "@/components/sidebar/sidebar-item";
import { useSession} from "next-auth/react";
import {User} from "@/config/interfaces";
import {SidebarElement} from "@/config/interfaces/component-interfaces";


const sidebarElements: SidebarElement[] = [
    {
        roles: ['Ejecutor'],
        href: '/ejecutor/formularios',
        detail: 'Formularios',
        icon: <FaWpforms className='inline-block'/>
    },
    {
        roles: ['Administrador'],
        href: '/reportes',
        detail: 'Reportes',
        icon: <FaWpforms className='inline-block'/>
    },
    {
        roles: ['Administrador'],
        href: '/user',
        detail: 'Usuarios',
        icon: <FaUserAlt className='inline-block' />
    },
    {
        roles: ['Administrador'],
        href: '/settings',
        detail: 'Settings',
        icon: <AiFillSetting className='inline-block' />
    }
];

interface Props {
}

export const SidebarItems: React.FC<Props> = ({}) => {
    const { data: session, status } = useSession();
    const user =  session?.user! as User;

    const sortSidebarElementsByRole = (sidebarElements: SidebarElement[], role: string): SidebarElement[] => {
        const sortedSidebarElements: SidebarElement[] = [];
        sidebarElements.forEach((element: SidebarElement) => {
            if (element.roles.includes(role)) {
                sortedSidebarElements.push(element);
            }
        });
        return sortedSidebarElements;
    }
    const sortedSidebarElements = sortSidebarElementsByRole(sidebarElements, user?.role?.name!);
    return (

          <div className='flex flex-col p-2'>
              {
                  sortedSidebarElements.map((element, index) => {
                      return  <SidebarItem href={element.href} detail={element.detail} icon={element.icon} key={index} />
                  })
              }
          </div>
    );
};
