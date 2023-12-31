import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { ThemeSwitcher } from "@/components";
import {NavbarUserInfo} from "@/components/navbar/navbar-user-info";

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
                <NavbarUserInfo/>
            </NavbarContent>
            <ThemeSwitcher />
        </Navbar>
    );
};
