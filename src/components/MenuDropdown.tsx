import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Dropdown } from "./Dropdown";

type MenuItem = {
    to: string;
    label: string;
};

type MenuDropdownProps = {
    items: MenuItem[];
};

export const MenuDropdown = ({ items }: MenuDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const closeDropdown = () => setIsOpen(false);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.hash]);

    return (
        <Dropdown isOpen={isOpen} onClose={closeDropdown}>
            <nav className="nav">
                <button className="nav-toggle" onClick={toggleDropdown}>
                    {isOpen ? "✕" : "☰"}
                </button>

                {isOpen && (
                    <div className="dropdown-menu">
                        {items.map((item) => (
                            <Link
                                key={item.to}
                                to={`/${item.to}`}
                                onClick={closeDropdown}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </Dropdown>
    );
};