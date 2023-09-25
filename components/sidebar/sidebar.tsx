import React from 'react';
import { Image } from "@nextui-org/image";
import { APP_ICON_IMAGE } from '@/constants';
import {SidebarItems} from "@/components/sidebar/sidebar-items";

interface Props {

}

export const Sidebar: React.FC<Props> = ({ }) => {
    return (
        <div className='w-64 h-screen border-r-1 border-zinc-300 dark:border-zinc-800 dark:text-gray-200'>
            <Image src={APP_ICON_IMAGE} width={200} height={200}
                className='mx-auto p-4' alt='ProIngenieria' />
            <SidebarItems />
        </div>
    );
};
