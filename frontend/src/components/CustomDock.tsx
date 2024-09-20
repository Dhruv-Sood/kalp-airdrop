import React from "react";
import Link from "next/link";
import { Dock } from "./magicui/dock";
const DATA = {
    navbar: [
        { href: "#check-balance", label: "Check Balance" },
        { href: "#airdrop", label: "Airdrop" },
    ],
};

export default function DockDemo() {
    return (
        <Dock direction="middle">
                {DATA.navbar.map((item) => (
                    <Link key={item.label} href={item.href} aria-label={item.label}>
                        <button className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
                            {item.label}
                        </button>
                    </Link>
                ))}
        </Dock>
    );
}
