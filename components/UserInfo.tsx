'use client';
import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Avatar} from "@nextui-org/avatar";
import {useRouter} from "next/navigation";
import {  useSession, signOut } from "next-auth/react";
interface Props {
}

export const UserInfo: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;
  const logout = async () => {
    signOut();
    return router.push('/login');
  }

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name={name!}
            size="sm"

          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Hola!! {name}</p>
            <p className="font-semibold">{email}</p>
          </DropdownItem>
          <DropdownItem key="profile" color="primary">
            Ver Profile
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Salir
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
