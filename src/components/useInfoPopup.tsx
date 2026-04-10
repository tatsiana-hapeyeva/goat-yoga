import { useState, useEffect } from "react";

function useLockBodyScroll(locked: boolean) {
    useEffect(() => {
        if (!locked) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [locked]);
}

export function useInfoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useLockBodyScroll(isOpen);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        open,
        close,
    };
}