import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { ThemeSwitcher } from "@/components";
import {UserInfo} from "@/components/UserInfo";

interface Props {

}

export const CustomNavbar: React.FC<Props> = ({ }) => {
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand >
                    <p className="hidden sm:block font-bold text-inherit">ProIngenieria</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                <UserInfo name={'Admin'} email={'Admin@Admin'} />
            </NavbarContent>
            <ThemeSwitcher />
        </Navbar>
    );
};