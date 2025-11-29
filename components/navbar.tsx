"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MessageCircle, User } from "lucide-react";
export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon:<User className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon:<User className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Project",
            link: "#project",
            icon:<User className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
