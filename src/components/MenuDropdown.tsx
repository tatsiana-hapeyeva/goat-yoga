import { useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { useDropdown } from '../hooks/use-dropdown'
import { Dropdown } from './Dropdown'

type MenuItem = {
    to: string
    label: string
}

type MenuDropdownProps = {
    items: MenuItem[]
}

export const MenuDropdown = ({ items }: MenuDropdownProps) => {
    const location = useLocation()
    const { containerRef, isOpen, closeDropdown, toggleDropdown } = useDropdown()

    useEffect(() => {
        if (!location.hash) return

        const id = location.hash.slice(1)
        const element = document.getElementById(id)

        if (!element) return

        element.scrollIntoView({ behavior: 'smooth' })
    }, [location.hash])

    return (
        <Dropdown
            containerRef={containerRef}
            isOpen={isOpen}
            className="nav"
            trigger={(
                <button
                    className="nav-toggle"
                    onClick={toggleDropdown}
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            )}
        >
            {items.map((item) => (
                <Link
                    key={item.to}
                    to={`/${item.to}`}
                    onClick={closeDropdown}
                >
                    {item.label}
                </Link>
            ))}
        </Dropdown>
    )
}