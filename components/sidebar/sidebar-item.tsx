import React from 'react';
import {Button} from "@nextui-org/button";
import NextLink from "next/link";

interface Props {
    key?: number;
    href: string;
    detail: string;
    icon?: React.ReactNode;
    active?: boolean;
}

export const SidebarItem: React.FC<Props> = ({href, detail, icon, active}) => {
    return (
      <Button href={href}
              as={NextLink}
              className={`justify-between hover:scale-102 hover:translate-x-2 text-gray-600 ${active ? 'bg-zinc-100 dark:bg-zinc-700' : ''}`}
              variant="light"
      >
          {icon}
          <p className={'font-bold text-center w-full'}>{detail}</p>
      </Button>
    );
};
