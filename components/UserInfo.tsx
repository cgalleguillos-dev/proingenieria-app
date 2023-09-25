'use client';
import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";
import {useRouter} from "next/navigation";

interface Props {
  name: string;
  email: string;
}

export const UserInfo: React.FC<Props> = ({name, email}) => {
  const router = useRouter();
  const logout = () => {
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    ).then(() => {
      router.push('/login');
    } );
  }


  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />

      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Hello!! {name}</p>
          <p className="font-semibold">{email}</p>
        </DropdownItem>
        <DropdownItem key="profile" color="primary">
          See Profile
        </DropdownItem>
        <DropdownItem key="logout" color="danger"
                      onClick={logout}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
