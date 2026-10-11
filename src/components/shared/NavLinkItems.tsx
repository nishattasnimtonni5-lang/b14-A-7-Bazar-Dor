"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItemProps {
    href: string,
    icon: string,
    nameBn: string
}

const NavLinkItem = ({ href, icon, nameBn }: NavLinkItemProps) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`rounded-md px-3 py-2 transition-colors ${
                isActive
                    ? "bg-green-100 text-green-800"
                    : "bg-transparent hover:bg-green-50"
            }`}
        >

            <div>
                {icon}
                {nameBn}
            </div>

        </Link>
    );
};

export default NavLinkItem;