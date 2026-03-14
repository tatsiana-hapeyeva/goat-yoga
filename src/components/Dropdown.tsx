import { useEffect, useRef } from "react";

type DropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Dropdown = ({ isOpen, onClose, children, className }: DropdownProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={menuRef} className={className}>
      {children}
    </div>
  );
};