"use client";
import React from 'react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { BiSolidSun } from 'react-icons/bi';
import { BsFillMoonFill } from 'react-icons/bs';

interface Props {

}

export const ThemeSwitcher: React.FC<Props> = ({ }) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isSelected, setIsSelected] = useState(theme === 'dark')
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null


    const handleValueChange = (value: boolean) => {
        setIsSelected(value)
    }

    const handleThemeChange = (value: boolean) => {
        setTheme(value ? 'dark' : 'light')
    }

    const handleSwitchChange = (value: boolean) => {
        handleValueChange(value)
        handleThemeChange(value)
    }

    return (
        <div className="">
            <Switch
                isSelected={isSelected}
                onValueChange={handleSwitchChange}
                defaultSelected
                size="md"
                color="primary"
                startContent={<BiSolidSun /> }
                endContent={<BsFillMoonFill />}
            >
            </Switch>
        </div>
    );
};