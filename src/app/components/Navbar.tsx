'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
           setActive={setActive} active={active} item="My Projects"
            >
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/projects">All Projects</HoveredLink>
                <HoveredLink href="/projects">Bank System</HoveredLink>
                <HoveredLink href="/projects">TODO App</HoveredLink>
                <HoveredLink href="/projects">Student Managment System</HoveredLink>
                <HoveredLink href="/projects">Adventure Game</HoveredLink>
                <HoveredLink href="/projects">Calculator</HoveredLink> 
                <HoveredLink href="/projects">ATM</HoveredLink>
                <HoveredLink href="/projects">Currency Converter</HoveredLink>
                <HoveredLink href="/projects">Guess The Number</HoveredLink>
                <HoveredLink href="/projects">CountDownTimer</HoveredLink>
                <HoveredLink href="/projects">Word Counter</HoveredLink>                                                                                                                               
            </div>
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active}
                 item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
        </div>
  )
}  

export default Navbar