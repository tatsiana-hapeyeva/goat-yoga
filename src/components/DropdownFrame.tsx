import { useEffect, useRef, useState, type ReactNode } from "react";

type DropdownRenderToggleArgs = {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
};

type DropdownRenderMenuArgs = {
    close: () => void;
};

type DropdownProps = {
    renderToggle: (args: DropdownRenderToggleArgs) => ReactNode;
    renderMenu?: (args: DropdownRenderMenuArgs) => ReactNode;
    className?: string;
};

export function DropdownFrame({
    renderToggle,
    renderMenu,
    className,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div ref={containerRef} className={className}>
            {renderToggle({ isOpen, toggle, open, close })}
            {isOpen && renderMenu ? renderMenu({ close }) : null}
        </div>
    );
}