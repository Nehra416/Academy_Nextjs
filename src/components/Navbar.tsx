'use client';    // use this on top when we need dom manipulation or use react hooks etc on client side
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
      <div
          className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>

            {/* home page option in navbar/menubar */}
            <Link href={'/'}>
                  <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>

            {/* Our Courses option */}
            <MenuItem setActive={setActive} active={active} item="Our Courses">
                  <div className="flex flex-col text-center text-sm gap-3">
                      <HoveredLink href="/course">React js</HoveredLink>
                      <HoveredLink href="/course">Next js</HoveredLink>
                      <HoveredLink href="/course">Express js</HoveredLink>
                      <HoveredLink href="/course">Node js</HoveredLink>
                  </div>
            </MenuItem>

            {/* Contact page option */}
            <Link href={'/contact'}>
                  <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
            </Link>
            
        </Menu>
    </div>
  )
}

export default Navbar