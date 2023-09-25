import React from 'react';
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {FaWpforms} from "react-icons/fa";

interface Props {
    key?: number;
    href: string;
    detail: string;
    icon?: React.ReactNode;
}

export const SidebarItem: React.FC<Props> = ({href, detail, icon}) => {
    return (
      <Button href={href}
              as={Link}
              className='justify-between hover:scale-102 hover:translate-x-2 text-gray-600'
              variant="light"
      >
          {icon}
          <p className={'font-bold text-center w-full'}>{detail}</p>
      </Button>
    );
};
