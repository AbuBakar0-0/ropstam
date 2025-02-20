import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Button } from './../components/ui/Button';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/10 w-full px-8 lg:4x-12 py-6 flex items-center justify-between rounded-2xl backdrop-blur-md">
            {/* LOGO */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white">LOGO</h1>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-row space-x-6 text-white">
                <li className="font-bold cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Owners</li>
                <li className="cursor-pointer">Tenants</li>
                <li className="cursor-pointer">Properties</li>
            </ul>

            {/* Button (Visible on all sizes) */}
            <div className="hidden lg:flex">
                <Button title={"Start Treatment"} />
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
                {isOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-24 left-0 w-full bg-slate-600 rounded-lg backdrop-blur-md p-6 flex flex-col items-start text-white space-y-8 lg:hidden">
                    <ul className="flex flex-col space-y-3">
                        <li className="font-bold cursor-pointer">Home</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Owners</li>
                        <li className="cursor-pointer">Tenants</li>
                        <li className="cursor-pointer">Properties</li>
                        <Button title={"Start Treatment"} />

                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
